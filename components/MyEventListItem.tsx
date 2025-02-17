import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { defaultEventImage } from "./EventListItem";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Event } from "@/types";
import Button from "./Button";

type EventListItemProps = {
  event: Event;
};

const { width } = Dimensions.get("window");

const MyEventListItem = ({ event }: EventListItemProps) => {
  return (
    <Pressable style={styles.card}>
      <Image
        source={{ uri: event.image || defaultEventImage }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.heading}>{event.title}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <View>
          <View style={styles.category}>
            <FontAwesome name="map-marker" size={20} style={styles.text} />
            <Text style={styles.text}>{event.city}</Text>
          </View>
          <View style={styles.category}>
            <Fontisto name="date" size={18} style={styles.text} />
            <Text style={styles.text}>{event.date}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 8, marginVertical: 5 }}>
          <Button text="Edit" />
          <Button text="Delete" color="#F32013" borderColor="#F32013" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 5,
    margin: 2,
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
  image: {
    width: "100%",
    borderRadius: width * 0.04,
    aspectRatio: 3,
  },
  content: {
    padding: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  description: {
    color: "gray",
    fontSize: width * 0.035,
  },
  text: {
    color: "#0388E6",
    fontSize: width * 0.035,
  },
  category: {
    flexDirection: "row",
    gap: width * 0.01,
    backgroundColor: "#EDF2FE",
    padding: width * 0.01,
    marginVertical: width * 0.005,
    borderRadius: width * 0.02,
    alignItems: "center",
  },
});

export default MyEventListItem;
