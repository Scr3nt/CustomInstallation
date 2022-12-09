import { Text, TouchableOpacity } from "react-native";

import useButtonsStyles from "./styles/useButtonsStyles";

export default function Button() {
  const styles = useButtonsStyles();
  return (
    <TouchableOpacity style={styles.Button}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
