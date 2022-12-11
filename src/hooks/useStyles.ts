import { useMemo } from "react";
import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  useWindowDimensions,
} from "react-native";

import useTheme from "./useTheme";

export function useStyles<StylesName>(
  customStyle: {
    [StyleProperty in keyof StylesName]: ViewStyle | TextStyle | ImageStyle;
  },
  deps: unknown[] = []
) {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create(customStyle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customStyle, width, theme, ...deps]);

  return styles;
}
