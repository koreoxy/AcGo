import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="[id]"
        options={{ title: "Details", headerShown: false }}
      />
      <Tabs.Screen
        name="create"
        options={{ title: "Create Event", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
      <Tabs.Screen
        name="myevent"
        options={{ title: "My Event", headerShown: false }}
      />
    </Tabs>
  );
};

export default TabLayout;
