import { useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";
import { Theme } from "theme";

export default function useButtonsStyles() {
  const theme = useTheme<Theme>();

  const styles = {
    Button: { backgroundColor: theme.colors.red, padding: 10 } as ViewStyle,
    CustomButton: {
      backgroundColor: theme.colors.blue,
      padding: 10,
    } as ViewStyle,
  };

  return styles;
}
