import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  Animated,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../tokens";

export const Button = ({
  title,
  ...props
}: PressableProps & { title: string; isLoading?: boolean }) => {
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
    props?.onPressIn && props?.onPressIn(e);
  };

  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
    props?.onPressOut && props?.onPressOut(e);
  };

  return (
    <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={{
          ...styles.container,
          backgroundColor: color,
        }}
      >
        {props.isLoading && <ActivityIndicator size="large" color={"white"} />}
        {!props.isLoading && <Text style={styles.title}>{title}</Text>}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.gray,
  },
});
