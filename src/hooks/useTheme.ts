import { useMemo, useState } from "react";

import { storage } from "../consts";
import dark from "../themes/dark";
import light from "../themes/light";
import theme from "../themes/theme";

export default function useTheme() {
  const [themeType, setThemeType] = useState(storage.getString("theme"));

  const _ = storage.addOnValueChangedListener(() => {
    const newValue = storage.getString("theme");
    setThemeType(newValue);
  });

  const themeSelected = useMemo(() => {
    const colors = themeType === "light" ? light.colors : dark.colors;
    const themeVariant = {
      colors,
      ...theme,
    };
    return themeVariant;
  }, [themeType]);

  return themeSelected;
}
