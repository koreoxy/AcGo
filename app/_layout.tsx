import React from "react";
import { Stack, Tabs } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
