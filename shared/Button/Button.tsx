import {
  Pressable,
  Text,
  StyleSheet,
  ButtonProps,
  PressableProps,
} from "react-native";
import { Colors } from "../tokens";

export const Button = ({
  title,
  ...props
}: PressableProps & { title: string }) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.gray,
  },
});
