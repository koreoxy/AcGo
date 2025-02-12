import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Banner from "@/components/Banner";

const Home = () => {
  return (
    <View style={styles.container}>
      <Banner />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
  },
});

export default Home;
