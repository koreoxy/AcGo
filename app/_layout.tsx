import React from "react";
import { Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(main)"
        options={{
          headerLeft: () => (
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4113/4113044.png",
              }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                borderColor: "black",
                borderWidth: 1,
              }}
            />
          ),
          headerTitle: () => (
            <Image
              source={require("../assets/images/logo.png")}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: "center",

          headerRight: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
      />
    </Stack>
  );
};

export default _layout;
