import ResponsiveLayout from "@/src/components/Layouts/responsive-layout";
import theme from "@/theme";
import { ThemeProvider } from "@shopify/restyle";

import Home from "./home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveLayout
        renderOnPhone={() => <Home />}
        renderOnTablet={() => <Home />}
      />
    </ThemeProvider>
  );
}
