import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 90,
    backgroundColor: "white",
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 41,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "black",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "black",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "#ccc",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
