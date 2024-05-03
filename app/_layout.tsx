import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "../shared/tokens";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.violetDark,
          },
        }}
      >
        <Stack.Screen name="login" />
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
