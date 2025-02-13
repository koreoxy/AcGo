import { StyleSheet, View } from "react-native";
import React from "react";
import { useLinkBuilder } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, PlatformPressable } from "@react-navigation/elements";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { buildHref } = useLinkBuilder();
  const primaryColor = "#0388E6";
  const greyColor = "#737373";

  const icons: Record<string, (props: { color: string }) => JSX.Element> = {
    index: (props) => <AntDesign name="home" size={26} {...props} />,
    create: (props) => <AntDesign name="pluscircle" size={26} {...props} />,
    profile: (props) => <AntDesign name="user" size={26} {...props} />,
  };

  const customLabels: Record<string, string> = {
    index: "Home",
    create: "Create",
    profile: "Profile",
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        let label: string = customLabels[route.name] || route.name;

        if (typeof options.tabBarLabel === "string") {
          label = options.tabBarLabel;
        } else if (typeof options.tabBarLabel === "function") {
          label = options.tabBarLabel({
            focused: isFocused,
            color: isFocused ? primaryColor : greyColor,
            position: "below-icon",
            children: route.name,
          }) as string;
        }

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            pressColor="white"
            style={styles.tabbarItem}
          >
            {icons[route.name]?.({
              color: isFocused ? primaryColor : greyColor,
            }) ?? null}
            <Text
              style={{
                color: isFocused ? primaryColor : greyColor,
                fontSize: 11,
              }}
            >
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBar;
