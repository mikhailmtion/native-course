import {
  Pressable,
  StyleSheet,
  PressableProps,
  View,
} from "react-native";
import { Colors } from "../../../shared/tokens";
import MenuIcon from "../../../assets/icons/Menu";
import { useState } from "react";

export const MenuButton = ({
  navigation,
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: PressableProps & { navigation: any }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Pressable
      {...props}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      onPress={() => navigation.toggleDrawer()}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
        }}
      >
        <MenuIcon />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
