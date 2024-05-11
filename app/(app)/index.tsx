import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import {
  courseAtom,
  loadCourseAtom,
} from "../../entities/course/model/course.state";

export default function MyCourses() {
  const { isLoading, courses } = useAtomValue(courseAtom);
  const loadCourse = useSetAtom(loadCourseAtom);

  useEffect(() => {
    loadCourse();
  }, []);


  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    padding: 35,
  },
});
