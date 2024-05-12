import { StyleSheet, View, Image, Text, Linking } from "react-native"
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StudentCourseDescription } from "../model/course.model";
import { Button } from "../../../shared/Button/Button";
import { Colors } from "../../../shared/tokens";

export function CourseCard({
  image,
  shortTitle,
  alias,
  tariffs,
}: StudentCourseDescription) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
        height={200}
      />
      <View style={styles.header}>
        <Text style={styles.title}>{shortTitle}</Text>
        <MaskedView
          maskElement={
            <Text style={styles.tariff}>
              Тариф &laquo;{tariffs[0].name}&raquo;
            </Text>
          }
        >
          <LinearGradient
            colors={["#D77BE5", "#6C38CC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={{ ...styles.tariff, ...styles.tariffWithOpacity }}>
              Тариф &laquo;{tariffs[0].name}&raquo;
            </Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View style={styles.footer}>
        <Button
          title="Купить"
          onPress={() =>
            Linking.openURL(`https://purpleschool.ru/course/${alias}`)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    borderRadius: 10,
    backgroundColor: Colors.blackLight,
  },
  tariff: {
    marginTop: 10,
    fontSize: 16,
  },
  tariffWithOpacity: {
    opacity: 0,
  },
  image: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: 21,
    color: "white",
    marginBottom: 12,
  },
  chips: {
    flexDirection: "row",
    gap: 10,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  footer: {
    backgroundColor: Colors.violetDark,
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
