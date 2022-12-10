import { useStyles } from "@/src/hooks/useStyles";
import { useTheme } from "@shopify/restyle";
import { Theme } from "theme";

export default function useButtonsStyles() {
  const theme = useTheme<Theme>();
  const styles = useStyles({
    Button: {
      backgroundColor: theme.colors.red,
      padding: 10,
      borderRadius: 6,
    },
    CustomButton: {
      backgroundColor: theme.colors.blue,
      padding: 10,
      borderRadius: 6,
    },
  });

  return styles;
}
