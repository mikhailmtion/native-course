import { Redirect } from "expo-router";
import { useAtomValue } from "jotai";
import { loginAtom } from "../../entities/auth/model/auth.state";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  const { access_token } = useAtomValue(loginAtom);

  if (!access_token) {
    return <Redirect href={"/login"} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
