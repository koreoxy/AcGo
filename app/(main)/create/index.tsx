import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  Platform,
} from "react-native";
import DropdownComponent from "@/components/Dropdown";
import Button from "@/components/Button";
import { defaultEventImage } from "@/components/EventListItem";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width, height } = Dimensions.get("window");

const CreateScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(true);
  };

  const onChange = (_event: unknown, selectedDate?: Date): void => {
    const currentDate = selectedDate || date;
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    setDate(currentDate);
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.container}>
        {/* Upload Image */}
        <View style={styles.section}>
          <Text style={styles.imageText}>Upload Image</Text>
          <Image source={{ uri: defaultEventImage }} style={styles.image} />
          <Text style={styles.buttonImage}>Select Image</Text>
        </View>

        {/* Title Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Title</Text>
          <TextInput placeholder="Expo Meeting..." style={styles.input} />
        </View>

        {/* Description Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            multiline
            numberOfLines={10}
            placeholder="Description"
            style={styles.textArea}
          />
        </View>

        {/* Category Dropdown */}
        <View style={styles.section}>
          <Text style={styles.label}>Category</Text>
          <DropdownComponent />
        </View>

        {/* Location Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            placeholder="ICE BSD, Tangerang, Indonesia"
            style={styles.input}
          />
        </View>

        {/* City Input */}
        <View style={styles.section}>
          <Text style={styles.label}>City</Text>
          <TextInput placeholder="Tangerang" style={styles.input} />
        </View>

        {/* Date Picker */}
        <View style={styles.section}>
          <Text style={styles.label}>Date</Text>
          <Pressable onPress={toggleDatePicker} style={styles.dateButton}>
            <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
          </Pressable>
          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onChange}
            />
          )}
        </View>

        {/* Create Button */}
        <View style={styles.section}>
          <Button text="Create" backgroundColor="#0388E6" color="#fff" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: height * 0.1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: width * 0.02,
    margin: width * 0.03,
    borderRadius: 15,
    maxWidth: "100%",
    elevation: 6,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  section: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
  },
  buttonImage: {
    textAlign: "center",
    marginBottom: height * 0.005,
    fontWeight: "500",
    fontSize: width * 0.04,
    color: "#0388E6",
  },
  imageText: {
    textAlign: "center",
    marginBottom: height * 0.005,
    fontWeight: "500",
    fontSize: width * 0.04,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  label: {
    marginBottom: height * 0.005,
    fontWeight: "500",
    fontSize: width * 0.04,
  },
  input: {
    backgroundColor: "#F5F3F3",
    elevation: 2,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    padding: width * 0.03,
    borderRadius: 5,
    color: "gray",
    fontSize: width * 0.04,
  },
  textArea: {
    height: height * 0.15,
    textAlignVertical: "top",
    backgroundColor: "#F5F3F3",
    elevation: 2,
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    padding: width * 0.03,
    borderRadius: 5,
    color: "gray",
    fontSize: width * 0.04,
  },
  dateButton: {
    backgroundColor: "#F5F3F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  dateText: {
    color: "gray",
  },
});

export default CreateScreen;
