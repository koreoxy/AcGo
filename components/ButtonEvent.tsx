import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const { height } = Dimensions.get("window");

const ButtonEvent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/confet.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.h1}>You don't have any events</Text>
      <Text style={styles.h2}>Let's create your new event</Text>
      <Link href="/create" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Create</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.2,
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: -80,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  h2: {
    fontWeight: 500,
    fontSize: 15,
  },
  button: {
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    marginTop: 10,
    backgroundColor: "#0388E6",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
});

export default ButtonEvent;
