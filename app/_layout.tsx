import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "../shared/tokens";
import { Notificaiton } from "../shared/Notification/Notification";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Notificaiton/>
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
          name="restore"
          options={{
            title: "Восстановление пароля",
            presentation: "modal",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
