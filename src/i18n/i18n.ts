import * as Localization from "expo-localization";
import i18n from "i18n-js";

import en from "./lang/en";
import fr from "./lang/fr";

i18n.fallbacks = true;
i18n.translations = { en, fr };
i18n.locale = Localization.locale;

export default i18n;
