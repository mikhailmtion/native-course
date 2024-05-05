import { Redirect, Stack } from "expo-router";
import { useAtomValue } from "jotai";
import { loginAtom } from "../../entities/auth/model/auth.state";

export default function AppLayout() {
  const { access_token } = useAtomValue(loginAtom);

  if (!access_token) {
    return <Redirect href={"/login"} />;
  }

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
