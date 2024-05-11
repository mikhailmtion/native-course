import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export const useScreenOrientation = () => {
  const [orientation, setOrientation] =
    useState<ScreenOrientation.Orientation>();

  useEffect(() => {
    ScreenOrientation.getOrientationAsync().then((o) => setOrientation(o));
    const sub = ScreenOrientation.addOrientationChangeListener((o) => {
      setOrientation(o.orientationInfo.orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(sub);
    };
  }, []);

  return orientation;
};
