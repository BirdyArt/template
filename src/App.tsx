import { useTranslation } from "react-i18next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";
import { Button, ThemeProvider, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "./themes";

function App() {
  const { t } = useTranslation("template");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <Button>{t("title")}</Button>
    </ThemeProvider>
  );
}

export default App;
