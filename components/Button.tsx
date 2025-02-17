import { forwardRef } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: number;
} & React.ComponentPropsWithoutRef<typeof TouchableOpacity>;

const Button = forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    {
      text,
      color = "#0388E6",
      backgroundColor = "white",
      borderColor = "#0388E6",
      width,
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
        style={[
          styles.container,
          { backgroundColor, borderColor },
          width !== undefined ? { width } : {},
          style,
        ]}
      >
        <Text style={[styles.text, { color }]}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
  },
});

export default Button;
