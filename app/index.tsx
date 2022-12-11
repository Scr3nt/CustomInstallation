import ResponsiveLayout from "@/src/components/Layouts/ResponsiveLayout";

import Home from "./home";

export default function App() {
  return (
    <ResponsiveLayout
      renderOnPhone={() => <Home />}
      renderOnTablet={() => <Home />}
    />
  );
}
