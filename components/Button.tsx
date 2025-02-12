import Colors from "@/constants/Colors";
import { forwardRef } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
} & React.ComponentPropsWithoutRef<typeof TouchableOpacity>;

const Button = forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    {
      text,
      backgroundColor = "white",
      borderColor = "#59a3c9",
      style,
      ...props
    },
    ref
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.7}
        {...props}
        style={[styles.container, { backgroundColor, borderColor }, style]}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#59a3c9",
  },
});

export default Button;
