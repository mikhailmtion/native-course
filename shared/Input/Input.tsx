import {
  TextInput,
  TextInputProps,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { Colors } from "../tokens";
import { useState } from "react";
import { IOpenedEye } from "../../assets/icons/IOpenedEye";
import { IClosedIcon } from "../../assets/icons/IClosed";

export const Input = ({
  isPassword,
  ...props
}: TextInputProps & { isPassword?: boolean }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  return (
    <View style={{ ...styles.container }}>
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        placeholderTextColor={Colors.gray}
        {...props}
      />
      {isPassword && (
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible((prev) => !prev)}
        >
          {isPasswordVisible ? <IOpenedEye /> : <IClosedIcon />}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    height: 58,
    borderRadius: 10,
    backgroundColor: Colors.black,
    paddingHorizontal: 24,
    fontSize: 16,
    color: Colors.gray,
  },

  eyeIcon: {
    position: "absolute",
    right: 24,
    bottom: 17,
  },
});
