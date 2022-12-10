import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import useButtonsStyles from "./styles/useButtonsStyles";

type Props = TouchableOpacityProps;

export default function Button(props: Props) {
  const styles = useButtonsStyles();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.Button, props.style]}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
}
