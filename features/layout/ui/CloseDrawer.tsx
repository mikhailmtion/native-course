import { Pressable, StyleSheet, View } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import CloseIcon from "../../../assets/icons/CloseIcon";

export const CloseDrawer = ({ ...props }: DrawerContentComponentProps) => {
  return (
    <Pressable onPress={() => props.navigation.closeDrawer()}>
      <View style={styles.button}>
        <CloseIcon />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 20,
  },
});
