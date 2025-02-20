import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import { defaultEventImage } from "@/components/EventListItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "@/components/Button";
import { useEvent } from "@/api/events";
import dayjs from "dayjs";

const EventDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === "string" ? idString : idString[0]);
  const { data: event, error, isLoading } = useEvent(id);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch events</Text>;
  }

  if (!event) {
    return <Text>Event not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: event.image || defaultEventImage,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <View style={styles.category}>
            <MaterialIcons name="category" size={20} style={styles.text} />
            <Text style={styles.text}>{event.category}</Text>
          </View>

          <View style={styles.category}>
            <AntDesign name="hearto" size={20} style={styles.text} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.contentBot}>
            <FontAwesome name="map-marker" size={20} style={styles.text} />
            <Text style={styles.text}>{event.location}</Text>
          </View>
          <View style={styles.contentBot}>
            <Fontisto name="date" size={15} style={styles.text} />
            <Text style={styles.text}>
              {dayjs(event.created_at).format("D MMMM YYYY")}
            </Text>
          </View>
        </View>

        <Button text="Invite" backgroundColor="#0388E6" color="#fff" />
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
