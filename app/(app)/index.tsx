import { useAtom } from "jotai";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { profileAtom } from "../../entities/user/model/user.state";

export default function MyCourses() {
  const [profile] = useAtom(profileAtom);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{profile.isLoading}</Text>
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
