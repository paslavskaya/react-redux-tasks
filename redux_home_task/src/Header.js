import React, { useContext } from "react";
import { language_changed } from "./behavior/actions";
import { LocalizationContext } from "./LocalizationContext";

function Header() {
    const localizationContext = useContext(LocalizationContext);
    const onChange = (e) => localizationContext.dispatch(language_changed(e.target.value));
    return (
      <select onChange={onChange} defaultValue={localizationContext.language}>
        <option value="1033">English</option>
        <option value="1036">French</option>
      </select>
    );
}

export default Header;
