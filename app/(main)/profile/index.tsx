import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

const ProfileScreen = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/4113/4113044.png",
          }}
          style={styles.image}
        />
        <Text style={styles.textName}>죽재 - Jukjae</Text>
        <Text style={styles.textEmail}>Jukjae@gmail.com</Text>
        <Button text="Edit profile" borderColor="#000" color="#000" />
      </View>
      <View style={styles.myEventContainer}>
        <Text style={styles.textContent}>Event</Text>
        <View style={styles.myEventContent}>
          <Link href="/myevent/" asChild>
            <TouchableHighlight
              onPress={onPress}
              underlayColor="#dbd9d9"
              style={styles.touchable}
            >
              <View style={styles.content}>
                <View style={styles.content1}>
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    style={styles.icon}
                  />
                  <Text style={styles.text}>My Event</Text>
                  <Text style={styles.count}>5</Text>
                </View>
                <View>
                  <Feather
                    name="arrow-right"
                    size={20}
                    style={{ color: "#7E7E7E" }}
                  />
                </View>
              </View>
            </TouchableHighlight>
          </Link>

          {/* LINE */}
          <View
            style={{
              borderBottomColor: "#7E7E7E",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginHorizontal: 18,
            }}
          />

          <View style={styles.content}>
            <View style={styles.content1}>
              <MaterialIcons
                name="logout"
                size={20}
                style={styles.iconLogout}
              />
              <Text style={styles.textLogout}>Logout</Text>
            </View>
          </View>
        </View>
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
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
  },
  textName: {
    fontWeight: "bold",
    fontSize: width * 0.05,
    marginVertical: 2,
  },
  textEmail: {
    color: "gray",
    fontSize: 15,
    marginVertical: 2,
  },
  myEventContainer: { padding: 15 },
  myEventContent: {
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: "#F5F3F3",
    // Menambahkan shadow di Android
    elevation: 2,
    // Menambahkan shadow di iOS
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  touchable: {
    borderRadius: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 20,
    justifyContent: "space-between",
  },
  content1: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    gap: 10,
  },
  icon: {
    backgroundColor: "white",
    color: "#7E7E7E",
    padding: 5,
    borderRadius: 10,
    // Menambahkan shadow di Android
    elevation: 2,
    // Menambahkan shadow di iOS
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  iconLogout: {
    backgroundColor: "#FFEDED",
    color: "#F32013",
    padding: 5,
    borderRadius: 10,
    // Menambahkan shadow di Android
    elevation: 2,
    // Menambahkan shadow di iOS
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  textLogout: {
    color: "#F32013",
    fontWeight: "500",
    fontSize: width * 0.04,
  },
  text: {
    fontWeight: "500",
    fontSize: width * 0.04,
  },
  count: {
    padding: 5,
    width: 30,
    height: 30,
    textAlign: "center",
    backgroundColor: "#0388E6",
    color: "white",
    borderRadius: 100,
  },
  textContent: {
    color: "gray",
    fontSize: 15,
  },
});

export default ProfileScreen;
