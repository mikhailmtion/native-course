import { StyleSheet, Text, View, Image } from "react-native";
import { Input } from "./shared/Input/Input";
import { Colors, Gaps } from "./shared/tokens";
import { Button } from "./shared/Button/Button";
import { ErrorNotification } from "./shared/ErrorNotification/ErrorNotification";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [error, setError] = useState<string | undefined>(undefined);

  const alert = () => {
    setError("Error");
    setTimeout(() => {
      setError(undefined);
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input placeholder="Пароль" isPassword />
          <Button title="Войти" onPress={alert} />
        </View>
        <Text style={styles.link}>Восстановить пароль</Text>
      </View>
      <StatusBar />
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
