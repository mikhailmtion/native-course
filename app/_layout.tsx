import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function RootLayout() {
//   const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            // paddingTop: insets.top,
          },
        }}
      >
        <Stack.Screen name="index" />
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
