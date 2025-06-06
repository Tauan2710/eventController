import React, { useState } from "react";
import { View, Alert } from "react-native";
import { styles } from "./ParticipanteForm.styles";
import CustomInput from "../../components/CustomInput";
import { FullWidthButton } from "../../components/Buttons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../services/firebaseConfig";

const ParticipanteForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const { eventoId } = route.params;

  const handleSubmit = async () => {
    if (!nome || !email || !telefone || !idade) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const eventoRef = doc(firestore, "eventos", eventoId);
      const eventoSnap = await getDoc(eventoRef);

      if (eventoSnap.exists()) {
        const eventoData = eventoSnap.data();
        const participantes = eventoData.participantes || [];

        const novoParticipante = {
          id: Date.now().toString(),
          nome,
          email,
          telefone,
          idade,
        };

        await updateDoc(eventoRef, {
          participantes: [...participantes, novoParticipante],
        });

        Alert.alert("Sucesso", "Participante adicionado com sucesso!");

        setNome("");
        setEmail("");
        setTelefone("");
        setIdade("");

        navigation.navigate("DetalhesEvento", { event: { id: eventoId } });
      } else {
        Alert.alert("Erro", "Evento não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao adicionar participante:", error);
      Alert.alert("Erro", "Não foi possível adicionar o participante.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <CustomInput
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <CustomInput
          label="Email"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          label="Telefone"
          placeholder="Digite seu telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
        <CustomInput
          label="Idade"
          placeholder="Digite sua idade"
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />
        <FullWidthButton title="Salvar" text="Salvar" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default ParticipanteForm;
