import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Text,
} from "react-native";
import Banner from "@/components/Banner";
import EventListItem from "@/components/EventListItem";
import { useEventList } from "@/api/events";
import ButtonEvent from "@/components/ButtonEvent";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const { data: events, error, isLoading } = useEventList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <Banner />
      {events && events.length > 0 ? (
        <View style={styles.grid}>
          {events.map((item) => (
            <EventListItem key={item.id} event={item} />
          ))}
        </View>
      ) : (
        <ButtonEvent />
      )}
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
    marginHorizontal: -width * 0.01,
  },
});

export default HomeScreen;
