import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import {
  courseAtom,
  loadCourseAtom,
} from "../../entities/course/model/course.state";
import { StudentCourseDescription } from "../../entities/course/model/course.model";
import { CourseCard } from "../../entities/course/ui/CourseCard";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function MyCourses() {
  const { isLoading, courses } = useAtomValue(courseAtom);
  const loadCourse = useSetAtom(loadCourseAtom);

  useEffect(() => {
    loadCourse();
  }, []);

  const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
    return (
      <View style={styles.item}>
        <CourseCard {...item} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {courses.length > 0 && (
        <FlatList
          refreshControl={
            <RefreshControl
              tintColor={Colors.primary}
              titleColor={Colors.primary}
              refreshing={isLoading}
              onRefresh={loadCourse}
            />
          }
          data={courses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCourse}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
  container: {
    alignItems: "center",
    height: "100%",
    padding: 35,
  },
});
