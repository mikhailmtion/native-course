import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { useState } from "react";
import {
  Pressable,
  PressableProps,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Colors } from "../../../shared/tokens";

interface MenuItemProps {
  drawer: DrawerContentComponentProps;
  icon: React.ReactNode;
  text: string;
  path: string;
}

export const MenuItem = ({
  drawer,
  icon,
  text,
  path,
  ...props
}: MenuItemProps & PressableProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const isActive = drawer.state.routes[drawer.state.index].name === path;

  return (
    <Pressable
      {...props}
      onPressOut={() => setClicked(false)}
      onPressIn={() => setClicked(true)}
      onPress={() => drawer.navigation.navigate(path)}
    >
      <View
        style={{
          ...styles.menu,
          borderColor: isActive ? Colors.primary : Colors.black,
          backgroundColor:
            clicked || isActive ? Colors.violetDark : Colors.black,
        }}
      >
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRightWidth: 5,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
