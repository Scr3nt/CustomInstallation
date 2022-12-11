import { useStyles } from "@/src/hooks/useStyles";
import useTheme from "@/src/hooks/useTheme";

export default function useButtonsStyles() {
  const theme = useTheme();
  const styles = useStyles({
    Button: {
      backgroundColor: theme.colors.red,
      padding: 10,
      borderRadius: theme.borderRadius.l,
    },
    CustomButton: {
      backgroundColor: theme.colors.blue,
      padding: 10,
      borderRadius: theme.borderRadius.l,
    },
  });

  return styles;
}
