import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./Cadastro.styles";
import { AppContext } from "../../context/AppContext";
import useCadastro from "./useCadastro";

const EnderecoDisplay = ({ endereco }) => {
  if (!endereco) return null;

  return (
    <View>
      <Text style={styles.label}>Endereço:</Text>
      <TextInput style={styles.input} value={endereco} editable={false} />
    </View>
  );
};

const Cadastro = () => {
  const navigation = useNavigation();
  const { login } = useContext(AppContext);

  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
    cep: "",
    complemento: "",
    senha: "",
    confirmarSenha: "",
  });

  const [endereco, setEndereco] = useState("");

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCepBlur = async () => {
    const { cep } = formData;
    if (cep && cep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        if (response.data && !response.data.erro) {
          setEndereco(response.data.logradouro);
        } else {
          Alert.alert("Erro", "CEP inválido ou não encontrado.");
        }
      } catch (error) {
        Alert.alert("Erro", "Erro ao buscar o CEP.");
      }
    } else {
      Alert.alert("Aviso", "Digite um CEP válido com 8 dígitos.");
    }
  };

  const { cadastrarUsuario, loading } = useCadastro();

  const handleSubmit = async () => {
    const { nome, idade, email, cep, senha, confirmarSenha, complemento } =
      formData;

    if (!nome || !idade || !email || !cep || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas são diferentes.");
      return;
    }

    await cadastrarUsuario({ nome, idade, email, senha, complemento, cep });

    if (!loading) {
      // Redirecionar ou limpar formulário, se necessário
      navigation.navigate("Home"); // por exemplo
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={formData.nome}
        onChangeText={(text) => handleInputChange("nome", text)}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={formData.idade}
        onChangeText={(text) => handleInputChange("idade", text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />

      <Text style={styles.label}>CEP:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={8}
        value={formData.cep}
        onChangeText={(text) => handleInputChange("cep", text)}
        onBlur={handleCepBlur}
      />

      <EnderecoDisplay endereco={endereco} />

      <Text style={styles.label}>Complemento:</Text>
      <TextInput
        style={styles.input}
        value={formData.complemento}
        onChangeText={(text) => handleInputChange("complemento", text)}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={formData.senha}
        onChangeText={(text) => handleInputChange("senha", text)}
      />

      <Text style={styles.label}>Confirmar Senha:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={formData.confirmarSenha}
        onChangeText={(text) => handleInputChange("confirmarSenha", text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cadastro;
