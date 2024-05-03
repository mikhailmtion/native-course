import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CoursePage() {
  const { alias } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>{alias}</Text>
    </SafeAreaView>
  );
}
