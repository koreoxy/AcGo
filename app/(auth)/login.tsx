import { View, Text, StyleSheet, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function loginWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Login" }} />

      <Image
        source={require("../../assets/images/shape2.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Image
        source={require("../../assets/images/shape1.png")}
        style={styles.image2}
        resizeMode="contain"
      />

      <View style={styles.header}>
        <Text style={styles.h1}>Hello</Text>
        <Text style={styles.h2}>Login to your account</Text>
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="john.doe@gmail.com"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="******"
          style={styles.input}
          secureTextEntry
        />

        <Button
          borderColor="#000"
          color="#000"
          text={loading ? "Login...." : "Login"}
          onPress={loginWithEmail}
          disabled={loading}
        />
        <Link href="/register" style={styles.textButton}>
          Create an account
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
    padding: 20,
  },
  image: {
    position: "absolute",
    top: -130,
    left: 120,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  image2: {
    position: "absolute",
    top: 280,
    left: -170,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  header: {
    alignItems: "center",
    flexDirection: "column",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 50,
  },
  h2: {
    fontWeight: "500",
    fontSize: 15,
  },
  label: {
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
    color: "gray",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#000",
    marginVertical: 10,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
