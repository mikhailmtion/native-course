import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {},
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
