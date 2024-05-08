import { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageUploader } from "../../shared/ImageUploader/ImageUploader";
import { updateProfileAtom } from "../../entities/user/model/user.state";
import { useAtom } from "jotai";
import { Button } from "../../shared/Button/Button";
import * as Sharing from "expo-sharing";

export default function Profile() {
  const [image, setImage] = useState<string>("");
  const [profile, updateProfile] = useAtom(updateProfileAtom);

  const shareProfile = async () => {
    const isShaingAvailable = await Sharing.isAvailableAsync();
    if (!isShaingAvailable) {
      return;
    }
    await Sharing.shareAsync("https://purpleschool.ru", {
      dialogTitle: "Поделиться профилем",
    });
  };

  const submitProfile = () => {
    if (!image) {
      return;
    }
    updateProfile({ photo: image });
  };

  useEffect(() => {
    if (profile && profile.profile?.photo) {
      setImage(profile.profile?.photo);
    }
  }, [profile]);

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
      <Button title="Сохранить" onPress={submitProfile} />
      <Button title="Поделится" onPress={shareProfile} />
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
