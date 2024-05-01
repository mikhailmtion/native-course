import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import { Input } from "./shared/Input/Input";
import { Colors, Gaps } from "./shared/tokens";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Пароль" />
          <Button title="Войти" />
        </View>
        <Text style={styles.link}>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    padding: 55,
    backgroundColor: Colors.violetDark,
  },
  content: {
    alignItems: "center",
    gap: Gaps.g50,
  },
  logo: {
    width: 220,
  },
  form: {
    alignSelf: "stretch",
    gap: Gaps.g16,
  },
  btn: {},
  link: {
    color: Colors.link,
  },
});
