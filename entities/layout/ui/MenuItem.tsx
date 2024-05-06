import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
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
  navigation: DrawerNavigationHelpers;
  icon: React.ReactNode;
  text: string;
  path: string;
}

export const MenuItem = ({
  navigation,
  icon,
  text,
  path,
  ...props
}: MenuItemProps & PressableProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Pressable
      {...props}
      onPressOut={() => setClicked(false)}
      onPressIn={() => setClicked(true)}
      onPress={() => navigation.navigate(path)}
    >
      <View
        style={{
          ...styles.menu,
          borderColor: true ? Colors.primary : Colors.black,
          backgroundColor:
            clicked || true ? Colors.violetDark : Colors.black,
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
    fontFamily: "regular",
  },
});
