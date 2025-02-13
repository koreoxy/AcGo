import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Banner from "@/components/Banner";
import EventListItem from "@/components/EventListItem";
import events from "@/assets/data/events";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Banner /> */}
      <View style={{ marginBottom: 80 }}>
        <FlatList
          data={events}
          renderItem={({ item }) => <EventListItem event={item} />}
          numColumns={2}
          contentContainerStyle={{
            gap: 10,
            padding: 10,
          }}
          columnWrapperStyle={{ gap: 10, justifyContent: "center" }}
          ListHeaderComponent={() => <Banner />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // marginVertical: 20,
  },
});

export default HomeScreen;
