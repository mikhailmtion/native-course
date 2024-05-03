import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  //   useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Colors } from "../shared/tokens";

export default function RootLayout() {
  //   const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.violetDark,
            // paddingTop: insets.top,
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="restorer"
          options={{
            title: "Восстановление пароля",
            presentation: "modal",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
