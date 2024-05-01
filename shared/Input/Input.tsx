import { TextInput, TextInputProps, StyleSheet } from "react-native";

export const Input = (props: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={"#AFB2BF"}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 58,
    borderRadius: 10,
    backgroundColor: "#2E2D3D",
    paddingHorizontal: 24,
    fontSize: 16,
  },
});
