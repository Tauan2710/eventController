import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./eventItem.syles";

const EventItem = ({ event }) => {
  // Converte timestamp para Date legível
  const eventDate = event.data?.toDate
    ? event.data.toDate()
    : new Date(event.data);
  const formattedDate = eventDate.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  return (
    <View style={styles.eventItem}>
      <Text style={styles.eventName}>{event.nome}</Text>
      <Text style={styles.eventDate}>{formattedDate}</Text>
      <Text style={styles.eventLocation}>Local: {event.local}</Text>
      <Text style={styles.participants}>
        Participantes: {event.participantes?.length ?? 0}
      </Text>
    </View>
  );
};

export default EventItem;
