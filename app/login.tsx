import { StyleSheet, Text, View, Image } from "react-native";
import { Input } from "../shared/Input/Input";
import { Colors, Gaps } from "../shared/tokens";
import { Button } from "../shared/Button/Button";
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";
import { useAtom } from "jotai";
import { loginAtom } from "../entities/auth/model/auth.state";
import { useScreenOrientation } from "../shared/hooks";
import { Orientation } from "expo-screen-orientation";

export default function Login() {
  const [{ error, access_token, isLoading }, login] = useAtom(loginAtom);
  const [localError, setLocalError] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const orientation = useScreenOrientation();

  const submit = () => {
    if (!email) {
      setLocalError("Не введён email");
      return;
    }

    if (!password) {
      setLocalError("Не введён пароль");
      return;
    }

    login({ email, password });
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (access_token) {
      router.replace("/(app)");
    }
  }, [access_token]);

  return (
    <View style={styles.container}>
      <ErrorNotification error={localError} />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <View
            style={{
              ...styles.inputs,
              flexDirection:
                orientation === Orientation.PORTRAIT_UP ? "column" : "row",
            }}
          >
            <Input placeholder="Email" onChangeText={setEmail} />
            <Input placeholder="Пароль" isPassword onChangeText={setPassword} />
          </View>
          <Button title="Войти" onPress={submit} isLoading={isLoading} />
        </View>
        <Link href={"/restore"}>
          <Text style={styles.link}>Восстановить пароль</Text>
        </Link>
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
  link: {
    color: Colors.link,
  },
  inputs: {
    gap: 16,
  },
});
