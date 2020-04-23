import React, { useContext } from "react";
import { LocalizationContext } from "./LocalizationContext";
import { texts } from "./texts";

const Content = () => {
  const localizationContext = useContext(LocalizationContext);
  return texts[localizationContext.language].text;
};

export default Content;
