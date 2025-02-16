import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Event } from "@/types";
import { truncateWords } from "@/lib/truncatewords";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");

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
          source={{ uri: event.image || defaultEventImage }}
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
    padding: width * 0.02,
    borderRadius: width * 0.04,
    maxWidth: "50%",
    // Shadow untuk Android
    elevation: 6,
    // Shadow untuk iOS
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: width * 0.01 },
    shadowOpacity: 0.2,
    shadowRadius: width * 0.04,
  },
  image: {
    width: "100%",
    borderRadius: width * 0.04,
    aspectRatio: 2,
  },
  contentText: {
    padding: width * 0.02,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  description: {
    color: "gray",
    fontSize: width * 0.035,
  },
  place: {
    flexDirection: "row",
    gap: width * 0.01,
    backgroundColor: "#EDF2FE",
    padding: width * 0.01,
    marginVertical: width * 0.005,
    borderRadius: width * 0.02,
    alignItems: "center",
  },
  date: {
    flexDirection: "row",
    gap: width * 0.01,
    backgroundColor: "#EDF2FE",
    padding: width * 0.01,
    marginVertical: width * 0.005,
    borderRadius: width * 0.02,
    alignItems: "center",
  },
  text: {
    color: "#0388E6",
    fontSize: width * 0.035,
  },
});

export default EventListItem;
