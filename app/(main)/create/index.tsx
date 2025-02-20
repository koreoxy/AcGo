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
import Button from "@/components/Button";
import { defaultEventImage } from "@/components/EventListItem";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { userInsertEvent } from "@/api/events";

const { width, height } = Dimensions.get("window");

const CreateScreen = () => {
  // State untuk form input
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [category, setCategory] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState("");

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const { mutate: insertEvent } = userInsertEvent();
  const router = useRouter();

  // Fungsi untuk mereset semua field
  const resetFields = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setLocation("");
    setCity("");
    setDate(new Date());
    setImage(null);
  };

  const toggleDatePicker = () => {
    setShowPicker(true);
  };

  // Fungsi onChange untuk DateTimePicker dengan tipe parameter yang sudah ditambahkan
  const onChange = (_event: unknown, selectedDate?: Date): void => {
    const currentDate = selectedDate || date;
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    setDate(currentDate);
  };

  // FUNCTION Image pick
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // FUNCTION VALIDATE INPUT VALUES
  const validateInput = (): boolean => {
    setError("");
    if (!title) {
      setError("Title is required");
      return false;
    }
    if (!description) {
      setError("Description is required");
      return false;
    }
    if (!category) {
      setError("Category is required");
      return false;
    }
    if (!location) {
      setError("Location is required");
      return false;
    }
    if (!city) {
      setError("city is required");
      return false;
    }
    if (!date) {
      setError("date is required");
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  //FUNCTION SEND FOOD DATA TO DATABASE
  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }

    console.log("Updating prduct", title);

    //TODO : SAVE IN THE DATABASE

    resetFields();
  };

  // FUNCTION SEND EVENT DATA TO DATABASE (CONTOH LOG)
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }

    insertEvent(
      { title, description, location, city, category, image },
      {
        onSuccess: () => {
          resetFields();
          router.back();
        },
      }
    );
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>
          {isUpdating ? "Update Event" : "Create Event"}
        </Text>

        {/* Upload Image */}
        <View style={styles.section}>
          <Image
            source={{ uri: image || defaultEventImage }}
            style={styles.image}
          />
          <Text style={styles.buttonImage} onPress={pickImage}>
            Select Image
          </Text>
        </View>

        {/* Title Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            placeholder="Expo Meeting..."
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* Description Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            multiline
            numberOfLines={10}
            placeholder="Description"
            style={styles.textArea}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Category Dropdown */}
        <View style={styles.section}>
          <Text style={styles.label}>Category</Text>
          <TextInput
            placeholder="Category"
            style={styles.input}
            value={category}
            onChangeText={setCategory}
          />
          {/* <DropdownComponent
            value={category}
            onChange={(item) => setCategory(item.value)}
          /> */}
        </View>

        {/* Location Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            placeholder="ICE BSD, Tangerang, Indonesia"
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
        </View>

        {/* City Input */}
        <View style={styles.section}>
          <Text style={styles.label}>City</Text>
          <TextInput
            placeholder="Tangerang"
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />
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

        {/* Error Message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Create Button */}
        <View style={styles.section}>
          <Button
            text={isUpdating ? "Update" : "Create"}
            backgroundColor="#0388E6"
            color="#fff"
            onPress={onSubmit}
          />
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
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
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
    marginTop: 5,
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
    color: "black",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: width * 0.04,
    marginVertical: height * 0.01,
  },
});

export default CreateScreen;
