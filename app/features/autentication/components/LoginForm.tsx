import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Email:", email);
    console.log("Senha:", password);
  }

  const isDisabled = email === "" || password === "";

  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={[styles.button, isDisabled && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isDisabled}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f4f7",
  },

  form: {
    width: 320,
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 5,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    fontSize: 14,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },

  buttonDisabled: {
    backgroundColor: "#9ca3af",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  link: {
    marginTop: 15,
    textAlign: "center",
    color: "#2563eb",
    fontSize: 14,
  },
});