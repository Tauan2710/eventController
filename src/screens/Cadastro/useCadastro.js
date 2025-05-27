import { useState } from "react";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
} from "../../services/firebaseConfig"; // Ajuste o caminho conforme necessário
import { doc, setDoc } from "firebase/firestore";
import { Alert } from "react-native";

const useCadastro = () => {
  const [loading, setLoading] = useState(false);

  const cadastrarUsuario = async (formData) => {
    const { nome, idade, email, senha, complemento, cep } = formData;
    setLoading(true);

    try {
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );
      const userId = userCredential.user.uid;

      // Salva os dados adicionais no Firestore
      await setDoc(doc(db, "usuarios", userId), {
        nome,
        idade,
        email,
        complemento,
        cep,
        createdAt: new Date(),
      });

      alert("Sucesso: Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro Não foi possível realizar o cadastro.");
    } finally {
      setLoading(false);
    }
  };

  return { cadastrarUsuario, loading };
};

export default useCadastro;
