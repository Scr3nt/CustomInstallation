import React from "react";
import { Text, View } from "react-native";

import { useLink } from "expo-router";

import Button from "@/src/components/Buttons/Button";
import CustomButton from "@/src/components/Buttons/CustomButton";
import { storage } from "@/src/consts";
import { useStyles } from "@/src/hooks/useStyles";
import useTheme from "@/src/hooks/useTheme";
import i18n from "@/src/i18n/i18n";

export default function Home() {
  const link = useLink();
  const theme = useTheme();
  const styles = useStyles({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    space_bottom: {
      marginBottom: 5,
    },
  });

  const changeTheme = () => {
    if (storage.getString("theme") === "dark") {
      return storage.set("theme", "light");
    }
    storage.set("theme", "dark");
  };

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
      <Button onPress={changeTheme} style={styles.space_bottom}>
        <Text>Change Theme</Text>
      </Button>
      <CustomButton />
    </View>
  );
}
