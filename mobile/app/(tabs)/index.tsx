import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  // Estados para capturar os dados do usuário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      // DICA: Se usar celular físico, troque 'localhost' pelo seu IP (ex: 192.168.x.x)
      const response = await fetch("http://192.168.1.11:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Sucesso:", data.token);
        router.replace("/(tabs)/explore");
      } else {
        Alert.alert("Erro", data.mensagem || "Credenciais inválidas");
      }
    } catch (error) {
      console.log("Erro de conexão:", error);
      Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    }
  };

  return (
    <LinearGradient colors={["#2D43A6", "#141D4C"]} style={styles.container}>
      <Image source={require("../../assets/images/image-removebg-preview.png")} style={styles.logoTop} />
      
      <Text style={styles.title}>MedClinic</Text>

      <View style={styles.card}>
        <Image source={require("../../assets/images/image-removebg-preview (2).png")} style={styles.imageDoctor} />
      </View>

      <View style={styles.textSection}>
        <Text style={styles.description}>Agendamento de exames e consultas simples, rápido e fácil.</Text>
        <Text style={styles.subDescription}>Acesse sua conta e agende já!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleLogin}>
        <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7}>
        <Text style={styles.signUpText}>
          Não tem uma conta? <Text style={styles.signUpBold}>CADASTRE-SE</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

// OS ESTILOS QUE ESTAVAM FALTANDO:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  logoTop: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    width: "80%",
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  imageDoctor: {
    width: 80,
    height: 80,
  },
  textSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  description: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.85,
  },
  subDescription: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textTransform: 'lowercase',
  },
  signUpButton: {
    marginTop: 20,
    padding: 10,
  },
  signUpText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
  },
  signUpBold: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});