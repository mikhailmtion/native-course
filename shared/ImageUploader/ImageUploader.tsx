import {
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
  PermissionStatus,
  MediaTypeOptions,
} from "expo-image-picker";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../tokens";

interface ImageUploaderProps {
  onUpload: (uri: string) => void;
}

export const ImageUploader = ({ onUpload }: ImageUploaderProps) => {
  const [libraryPermission, requestLibraryPermission] =
    useMediaLibraryPermissions();

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

  const pickImage = async () => {
    const isPermissionGranted = await verifyMediaPermission();

    if (!isPermissionGranted) return;

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.assets) return;

    onUpload(result.assets[0].uri);
  };

  return (
    <Pressable onPress={pickImage}>
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 14 }}>
          Загрузить изображение
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: Colors.violetDark,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: 'center',
  },
});
