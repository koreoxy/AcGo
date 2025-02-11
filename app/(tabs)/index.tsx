import { StyleSheet, Switch } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useColorScheme } from "nativewind";

export default function TabOneScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="dark:bg-neutral-900">
      <Text className="text-center">Hello cut</Text>
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
