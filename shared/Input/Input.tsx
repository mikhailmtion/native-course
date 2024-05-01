import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { Colors } from "../tokens";

export const Input = (props: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.gray}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 58,
    borderRadius: 10,
    backgroundColor: Colors.black,
    paddingHorizontal: 24,
    fontSize: 16,
  },
});
