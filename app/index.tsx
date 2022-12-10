import theme from "@/theme";
import { ThemeProvider } from "@shopify/restyle";

import Home from "./home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
