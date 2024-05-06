import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../../shared/tokens";
import { CloseDrawer } from "../../../features/layout/ui/CloseDrawer";
import { Link } from "expo-router";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../auth/model/auth.state";
import { loadProfileAtom } from "../../user/model/user.state";
import { useEffect } from "react";
import { UserMenu } from "../../user/ui/UserMenu";
import CourseIcon from "../../../assets/icons/CourseIcon";
import ProfileIcon from "../../../assets/icons/ProfileIcon";
import { MenuItem } from "./MenuItem";

const MENU = [
  { text: "Курсы", icon: <CourseIcon />, path: "/(app)" },
  { text: "Профиль", icon: <ProfileIcon />, path: "/profile" },
];

export function CustomDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);
  const [profile, loadProfile] = useAtom(loadProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.content}>
        <CloseDrawer {...props} />
        <UserMenu profile={profile.profile} />
        {MENU.map((item) => (
          <MenuItem key={item.path} navigation={props.navigation} {...item} />
        ))}
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
