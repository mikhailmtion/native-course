import { Redirect } from "expo-router";
import { useAtomValue } from "jotai";
import { loginAtom } from "../../entities/auth/model/auth.state";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "../../shared/tokens";
import MenuIcon from "../../assets/icons/Menu";
import { MenuButton } from "../../features/layout/ui/MenuButton";

export default function AppLayout() {
  const { access_token } = useAtomValue(loginAtom);

  if (!access_token) {
    return <Redirect href={"/login"} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowOpacity: 0,
          },
          headerLeft: () => {
            return <MenuButton navigation={navigation}/>
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
