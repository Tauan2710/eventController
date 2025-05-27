import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  eventItem: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  eventName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  eventDate: {
    color: "#555",
    marginTop: 4,
  },
  eventLocation: {
    color: "#777",
    marginTop: 2,
  },
  participants: {
    color: "#444",
    marginTop: 6,
    fontStyle: "italic",
  },
});
