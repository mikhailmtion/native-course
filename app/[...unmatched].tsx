import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../shared/tokens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UnmatchedCustom() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../assets/images/unmatched.png")}
          resizeMode="contain"
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>
            Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
            приложения
          </Text>
          <Link href={"/"} style={styles.link}>
            <Text>На главную</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    padding: 35,
    backgroundColor: Colors.violetDark,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 204,
    height: 282,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 50,
  },
  link: {
    fontSize: 18,
    color: Colors.primary,
  },
});
