import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../../shared/tokens";
import { CloseDrawer } from "../../../features/layout/ui/CloseDrawer";
import { Link } from "expo-router";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../auth/model/auth.state";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollView}
    >
      <CloseDrawer {...props} />
      <View style={styles.content}>
        <Text>Hello</Text>
      </View>
      <View style={styles.footer}>
        <Link style={{ color: Colors.link }} href={"/login"} onPress={logout}>
          Выход
        </Link>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../../assets/logo.png")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
  },
  footer: {
    gap: 50,
    marginBottom: 40,
    alignItems: "center",
  },
  logo: {
    width: 160,
  },
});
