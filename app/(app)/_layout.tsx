import { Redirect } from "expo-router";
import { useAtomValue } from "jotai";
import { loginAtom } from "../../entities/auth/model/auth.state";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "../../shared/tokens";
import { MenuButton } from "../../features/layout/ui/MenuButton";
import { CustomDrawer } from "../../entities/layout/ui/CustomDrawer";

export default function AppLayout() {
  const { access_token } = useAtomValue(loginAtom);

  if (!access_token) {
    return <Redirect href={"/login"} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => {
          return <CustomDrawer {...props} />;
        }}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowOpacity: 0,
          },
          headerLeft: () => {
            return <MenuButton navigation={navigation} />;
          },
          headerTitleStyle: {
            color: "white",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          sceneContainerStyle: {
            backgroundColor: Colors.black,
          },
        })}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Курсы",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
