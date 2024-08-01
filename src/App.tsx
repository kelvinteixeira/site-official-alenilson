import "./App.css";
import { Home } from "./Screens/Home";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/materialUI";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
