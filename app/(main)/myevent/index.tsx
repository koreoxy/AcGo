import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import MyEventListItem from "@/components/MyEventListItem";
import events from "@/assets/data/events";

const {width} = Dimensions.get('window')

const MyEventScreen = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <Text style={styles.heading}>My Event List</Text>
      <View style={styles.grid}>
        {events.map((item) => (
          <MyEventListItem key={item.id} event={item} />
        ))}
      </View>
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
  heading: {
    fontWeight: "bold",
    fontSize: width * 0.05,
  }
});

export default MyEventScreen;
