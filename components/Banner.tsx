import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Button from "./Button";
import Colors from "@/constants/Colors";

const Banner = () => {
  return (
    // <View className="flex-row p-4 bg-blue-200 rounded-md border drop-shadow-md">
    //   {/* Bagian kiri: Teks dan Button */}
    //   {/* <View className="flex-1 justify-center pr-4">
    //     <Text className="mb-4 text-lg font-bold">
    //       Get a special discount on the first purchase
    //     </Text>
    //     <Button
    //       text="Check Now"
    //       backgroundColor="#116DF2"
    //       onPress={() => console.log("s")}
    //     />
    //   </View> */}

    //   {/* Bagian kanan: Image */}
    //   <View className="">

    //   </View>
    // </View>
    <View className="flex flex-row justify-between items-center p-4 m-3 h-44 bg-blue-200 rounded-md border drop-shadow-md">
      <View className="flex flex-col w-40">
        <Text className="text-sm font-semibold">
          Get a special discount on the first purchase
        </Text>

        <Button
          text="Check Now"
          backgroundColor="#116DF2"
          onPress={() => console.log("s")}
        />
      </View>
      <Image
        source={require("../assets/images/ticket.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    aspectRatio: 1,
  },
});

export default Banner;
