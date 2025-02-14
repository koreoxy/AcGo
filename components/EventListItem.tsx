import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Event } from "@/types";
import { truncateWords } from "@/lib/truncatewords";
import { Link } from "expo-router";

export const defaultEventImage =
  "https://m.media-amazon.com/images/I/71ALEDbXA9L.jpg";

type EventListItemProps = {
  event: Event;
};

const EventListItem = ({ event }: EventListItemProps) => {
  return (
    <Link href={`/${event.id}`} asChild>
      <Pressable style={styles.card}>
        <Image
          source={{
            uri: event.image || defaultEventImage,
          }}
          style={styles.image}
        />
        <View style={styles.contentText}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>
            {truncateWords(event.description, 5)}
          </Text>
          <View>
            <View style={styles.place}>
              <FontAwesome name="map-marker" size={20} style={styles.text} />
              <Text style={styles.text}>{event.city}</Text>
            </View>
            <View style={styles.date}>
              <Fontisto name="date" size={18} style={styles.text} />
              <Text style={styles.text}>{event.date}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
    maxWidth: "50%",
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
    borderRadius: 15,
    aspectRatio: 2,
  },
  contentText: {
    padding: 5,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    color: "gray",
  },
  place: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: "#EDF2FE",
    padding: 5,
    marginVertical: 2,
    borderRadius: 8,
  },
  date: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: "#EDF2FE",
    padding: 5,
    marginVertical: 2,
    borderRadius: 8,
  },
  text: {
    color: "#0388E6",
  },
});

export default EventListItem;
