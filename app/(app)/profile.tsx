import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageUploader } from "../../shared/ImageUploader/ImageUploader";

export default function Profile() {
  const [image, setImage] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      {image ? (
        <Image style={styles.image} source={{ uri: image }} />
      ) : (
        <Image
          style={styles.image}
          source={require("../../assets/images/avatar.png")}
        />
      )}
      <ImageUploader onUpload={setImage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
