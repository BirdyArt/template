/* v8 ignore start */
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("template");

  return <p>{t("title")}</p>;
}

export default App;
