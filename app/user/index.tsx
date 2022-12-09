import { useLink } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function User() {
  const link = useLink();

  return (
    <View style={styles.container}>
      <TouchableOpacity testID="click-back" onPress={() => link.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>Tu es sur user</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "lightblue",
  },
});
