/* eslint-disable comma-dangle */
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import { useMemo } from "react";
import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  useWindowDimensions,
} from "react-native";

import usePresetStyles from "./usePresets";

export function useStyles<StylesName>(
  customStyle: {
    [StyleProperty in keyof StylesName]: ViewStyle | TextStyle | ImageStyle;
  },
  deps: unknown[] = []
) {
  const { width } = useWindowDimensions();
  const presets = usePresetStyles();
  const theme = useTheme<Theme>();

  const styles = useMemo(() => {
    return StyleSheet.create(customStyle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customStyle, width, theme, presets, ...deps]);

  return styles;
}
