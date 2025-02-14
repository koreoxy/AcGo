import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const EventDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <View style={styles.category}>
            <Entypo name="classic-computer" size={20} style={styles.text} />
            <Text style={styles.text}>Tech</Text>
          </View>

          <View style={styles.category}>
            <AntDesign name="hearto" size={20} style={styles.text} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>AI & Machine Learning Summit</Text>
          <Text style={styles.description}>
            AI & Machine Learning Summit Turnamen e-sports terbesar di Indonesia
            dengan berbagai kompetisi game populer. sadsa 1 1casd asd asd sadsa
            sd asdsad sa dasdsadasdsadsadsadsad1 1 asd sa dengan berbagai
            kompetisi game populer. sadsa 1 1casd asd asd sadsa sd asdsad sa
            dasdsadasdsadsadsadsad1 1 asd sa dengan berbagai kompetisi game
            populer. sadsa 1 1casd asd asd sadsa sd asdsad sa
            dasdsadasdsadsadsadsad1 1 asd sa
          </Text>
        </View>
        <View style={styles.section}>
          <View style={styles.contentBot}>
            <FontAwesome name="map-marker" size={20} style={styles.text} />
            <Text style={styles.text}>Istora Senayan, Jakarta, Indonesia</Text>
          </View>
          <View style={styles.contentBot}>
            <Fontisto name="date" size={15} style={styles.text} />
            <Text style={styles.text}>2025-09-30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5,
    margin: 10,
    borderRadius: 15,
    maxWidth: "100%",
    // Menambahkan shadow di Android
    elevation: 6,
    // Menambahkan shadow di iOS
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  image: { width: "100%", borderRadius: 15, aspectRatio: 2 },
  categoryContainer: { flexDirection: "row", justifyContent: "space-between" },
  category: {
    flexDirection: "row",
    alignContent: "center",
    gap: 5,
    backgroundColor: "#EDF2FE",
    padding: 5,
    marginVertical: 2,
    borderRadius: 5,
    borderColor: "#0388E6",
    borderWidth: 1,
    alignItems: "center",
  },
  content: {
    marginTop: 5,
    padding: 5,
  },
  section: { marginVertical: 5 },
  title: { fontWeight: "bold", fontSize: 16 },
  description: {
    color: "gray",
  },
  contentBot: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginVertical: 2,
    backgroundColor: "#EDF2FE",
    padding: 5,
    borderRadius: 5,
    borderColor: "#0388E6",
    borderWidth: 1,
  },
  text: { color: "#0388E6" },
});

export default EventDetailsScreen;
