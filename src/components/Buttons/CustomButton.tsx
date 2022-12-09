import React from "react";
import { Text, TouchableOpacity } from "react-native";

import useButtonsStyles from "./styles/useButtonsStyles";

export default function CustomButton() {
  const styles = useButtonsStyles();
  return (
    <TouchableOpacity style={styles.CustomButton}>
      <Text>CustomButton</Text>
    </TouchableOpacity>
  );
}
