import Button from "@/src/components/Buttons/Button";
import CustomButton from "@/src/components/Buttons/CustomButton";
import { useStyles } from "@/src/hooks/useStyles";
import i18n from "@/src/i18n/i18n";
import theme from "@/theme";
import { useLink } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  const link = useLink();
  const styles = useStyles({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: theme.colors.green,
    },
    space_bottom: {
      marginBottom: 5,
    },
  });

  return (
    <View testID="home" style={[styles.container]}>
      <Button
        testID="click-user"
        onPress={() => link.push("/user")}
        style={styles.space_bottom}
      >
        <Text>Go vers user</Text>
      </Button>
      <Button
        testID="click-settings"
        onPress={() => link.push("/settings")}
        style={styles.space_bottom}
      >
        <Text>Go vers settings</Text>
      </Button>
      <Text style={styles.space_bottom}>{i18n.t("hello")} Tu es sur home </Text>
      <CustomButton />
    </View>
  );
}
