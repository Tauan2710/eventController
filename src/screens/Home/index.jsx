import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../../context/AppContext";
import { styles } from "./Home.styles";

const Home = () => {
  const navigation = useNavigation();
  const { participantes } = useContext(AppContext);
  const [lotacao, SetVagas] = useState(2);
  const vagas = lotacao - participantes.length;
  const isLotado = participantes.length >= lotacao;

  const goToAddParticipante = () => {
    navigation.navigate("AddParticipante");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Nome do Evento: 🎶Bagunça Pronta🎶</Text>

      <View style={styles.eventInfo}>
        <Text style={styles.eventDetails}>
          Data: <Text style={styles.resposta}>25/12/2023</Text>
        </Text>
        <Text style={styles.eventDetails}>
          Local: <Text style={styles.resposta}>Salão de Festas</Text>
        </Text>
        <Text style={styles.eventDetails}>
          Lotação:<Text style={styles.resposta}> {lotacao}</Text>
        </Text>
        <Text style={styles.eventDetails}>
          Vagas Disponíveis: <Text style={styles.resposta}>{vagas}</Text>
        </Text>
        {isLotado && (
          <Text style={styles.warning}>Aviso:⚠️ Vagas Esgotadas! ⚠️</Text>
        )}
      </View>
      <TouchableOpacity
        disabled={isLotado}
        style={styles.btn}
        onPress={goToAddParticipante}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
