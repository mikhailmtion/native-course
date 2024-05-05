import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyCourses() {
  return (
    <SafeAreaView style={styles.container}>
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
