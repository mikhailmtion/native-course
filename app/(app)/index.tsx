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
import { Button } from "../../shared/Button/Button";
import * as Notifications from "expo-notifications";

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

  const allowsNotification = async () => {
    const settings = await Notifications.getPermissionsAsync();
    return (
      settings.granted ||
      settings.ios?.status == Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  };

  const requestPermissions = async () => {
    return Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
      },
    });
  };

  const handleNotification = async () => {
    const granted = await allowsNotification();
    if (!granted) {
      await requestPermissions();
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Не забудь пройти курс 📬",
        body: "Тело нотификации",
        data: { alias: "typescript" },
      },
      trigger: { seconds: 5 },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Напомнить" onPress={handleNotification} />
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
  },
});
