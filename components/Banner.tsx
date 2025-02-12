import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";
import Colors from "@/constants/Colors";

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentText}>
        <Text style={styles.text}>AcGo</Text>
        <Text style={styles.textDesc}>Buat Acara dan bagikan</Text>

        <Button
          text="Create Now"
          // backgroundColor="#97d2f0"
          onPress={() => console.log("s")}
        />
      </View>
      <Image
        source={require("../assets/images/ticket.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#97d2f0",
    borderRadius: 15,
    // Menambahkan shadow di Android
    elevation: 6,
    // Menambahkan shadow di iOS
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  contentText: {
    flexDirection: "column",
    width: 160,
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 30,
  },
  textDesc: {
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
});

export default Banner;
