import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig"; // Ajuste o caminho conforme seu arquivo de configuração
import EventItem, { eventItem } from "../../components/EventItem"; // Ajuste o caminho conforme sua estrutura de pastas
import { styles } from "./EventList.syles";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    alert("Buscando eventos...");
    try {
      alert("Iniciando busca de eventos");
      const eventosCol = collection(db, "Eventos");
      const snapshot = await getDocs(eventosCol);

      const eventosList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEvents(eventosList);
      alert("Eventos buscados com sucesso");
      console.log("Eventos buscados:", eventosList);
    } catch (error) {
      alert("Erro ao buscar eventos: " + error.message);
      console.error("Erro ao buscar eventos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <EventItem event={item} />}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={
        <Text style={styles.emptyText}>Nenhum evento encontrado</Text>
      }
    />
  );
};

export default EventList;
