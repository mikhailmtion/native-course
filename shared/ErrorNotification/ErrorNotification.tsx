import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";

interface ErrorNotificationProps {
  error: string | undefined;
}

export const ErrorNotification = ({ error }: ErrorNotificationProps) => {
  const [isShowError, setIsShowError] = useState(false);
  const animatedValue = new Animated.Value(-100);

  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!error) return;

    setIsShowError(true);

    const timer = setTimeout(() => {
      setIsShowError(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  if (!isShowError || !error) {
    return <></>;
  }

  return (
    <Animated.View
      style={{ ...styles.error, transform: [{ translateY: animatedValue }] }}
      onLayout={onEnter}
    >
      <Text style={styles.errorText}>{error}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  error: {
    position: "absolute",
    top: 50,
    height: 50,
    padding: 15,
    width: Dimensions.get("screen").width,
    backgroundColor: "#CC384E",
  },
  errorText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
