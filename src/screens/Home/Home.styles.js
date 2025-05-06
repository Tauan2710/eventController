import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 22,
  },
  count: {
    fontSize: 18,
    color: "#333",
  },
  btn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: "#007AFF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  warning: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
  },
  eventInfo: {
    marginTop: 20,
    alignItems: "center",
    color: "#333",
  },
  eventDetails: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    fontWeight: "bold",
  },
  resposta: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});
