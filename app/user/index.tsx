import { Text, TouchableOpacity, View } from "react-native";

import { useLink } from "expo-router";

import { useStyles } from "@/src/hooks/useStyles";

export default function User() {
  const link = useLink();
  const styles = useStyles({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: "lightblue",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity testID="click-back" onPress={() => link.back()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>Tu es sur user</Text>
    </View>
  );
}
