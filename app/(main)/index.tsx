import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import Banner from "@/components/Banner";
import EventListItem from "@/components/EventListItem";
import events from "@/assets/data/events";
import Button from "@/components/Button";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <Banner />
      <Link href="/login" asChild>
        <Button text="Login" />
      </Link>
      <View style={styles.grid}>
        {events.map((item) => (
          <EventListItem key={item.id} event={item} />
        ))}
      </View>
      <View style={{ height: height * 0.1 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: width * 0.02,
  },
  grid: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "center",
    marginHorizontal: -width * 0.01,
  },
});

export default HomeScreen;
