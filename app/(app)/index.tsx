import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../shared/Button/Button";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../entities/auth/model/auth.state";

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom);
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Выйти" onPress={logout} />
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
