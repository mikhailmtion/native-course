import { useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  useCameraPermissions,
  PermissionStatus,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { Button } from "../../shared/Button/Button";

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] =
    useMediaLibraryPermissions();

  const verifyCameraPermission = async () => {
    if (cameraPermission?.status === PermissionStatus.UNDETERMINED) {
      const res = await requestCameraPermission();
      return res.granted;
    }

    if (cameraPermission?.status === PermissionStatus.DENIED) {
      return false;
    }

    return true;
  };

  const verifyMediaPermission = async () => {
    if (libraryPermission?.status === PermissionStatus.UNDETERMINED) {
      const res = await requestLibraryPermission();
      return res.granted;
    }

    if (libraryPermission?.status === PermissionStatus.DENIED) {
      return false;
    }

    return true;
  };

  const captureAvatar = async () => {
    const isPermissionGranted = await verifyCameraPermission();

    if (!isPermissionGranted) return;

    const result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.assets) return;

    setImage(result.assets[0].uri);
  };

  const pickAvatar = async () => {
    const isPermissionGranted = await verifyMediaPermission();

    if (!isPermissionGranted) return;

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.assets) return;

    setImage(result.assets[0].uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>PROFILE</Text>
      <Button title="Снять изображение" onPress={captureAvatar} />
      <Button title="Выбрать из галереи" onPress={pickAvatar} />
      {image && <Image source={{ uri: image, width: 100, height: 100 }} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    padding: 35,
  },
});
