import { View, Text, Image, StyleSheet } from "react-native";
import { User } from "../model/user.model";

export const UserMenu = ({ profile }: { profile: User | null }) => {
  if (!profile) return;

  return (
    <View style={styles.container}>
      {profile.photo ? (
        <Image style={styles.image} src={profile.photo} />
      ) : (
        <Image
          style={styles.image}
          source={require("../../../assets/images/avatar.png")}
        />
      )}
      <Text style={styles.name}>{profile.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    marginTop: 30,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    color: "white",
    fontWeight: "700",
  },
});
