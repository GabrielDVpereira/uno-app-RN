import React from "react";
import { BaseAuthScreen } from "./BaseAuthScreen";
import logoImg from "../../assets/images/logo.png";

import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";

export function AuthPage() {
  return (
    <BaseAuthScreen>
      <Image source={logoImg} style={{ width: 300, resizeMode: "contain" }} />
      <TextInput
        placeholder="Email"
        style={{
          width: "70%",
          backgroundColor: "#fff",
          elevation: 2,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        style={{
          width: "70%",
          backgroundColor: "#fff",
          elevation: 2,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#ED1B24",
          width: "70%",
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          elevation: 5,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Registre-se</Text>
      </TouchableOpacity>
    </BaseAuthScreen>
  );
}
