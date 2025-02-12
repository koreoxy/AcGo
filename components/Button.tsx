import Colors from "@/constants/Colors";
import { forwardRef } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  backgroundColor?: string; // properti opsional untuk menentukan background
} & React.ComponentPropsWithoutRef<typeof TouchableOpacity>;

const Button = forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(({ text, backgroundColor = "blue", style, ...props }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.7} // efek opacity saat tombol ditekan
      {...props}
      style={[styles.container, { backgroundColor }, style]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Button;
