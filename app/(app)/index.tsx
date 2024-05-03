import { useAtom } from "jotai";
import { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginAtom } from "../../entities/auth/model/auth.state";

export default function MyCourses() {
  const [auth, login] = useAtom(loginAtom);

  useEffect(() => {
    login({ email: "introair@yandex.ru", password: "12345678" });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{auth?.access_token}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    padding: 35,
  },
});
