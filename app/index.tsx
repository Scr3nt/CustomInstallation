import { useLink } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const link = useLink();
  return (
    <View testID="home" style={styles.container}>
      <TouchableOpacity testID="click-user" onPress={() => link.push("/user")}>
        <Text>Go vers user</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="click-settings"
        onPress={() => link.push("/settings")}
      >
        <Text>Go vers settings</Text>
      </TouchableOpacity>
      <Text>Tu es sur home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "lightgreen",
  },
});
