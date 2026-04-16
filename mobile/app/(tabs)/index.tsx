import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#0b1c3a", "#2a3b7a"]}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/image.png")}
        style={styles.image}
      />

      <Text style={styles.title}>MedClinic</Text>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/doctor.png")}
          style={styles.image}
          
        />
      </View>

      <Text style={styles.description}>
        Agendamento de exames e consultas simples, rápido e fácil.
      </Text>
      <Text style={styles.description}>
        Acesse sua conta e agende já!
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>
    </LinearGradient>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  Image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',

  },
  card: {
    width: "90%",
    height: 180,
    backgroundColor: "#eee",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  description: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#d9d9d9",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
  },
});