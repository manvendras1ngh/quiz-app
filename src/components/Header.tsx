import React from "react";
import { useTheme } from "../main";

import darkModeIcon from "../assets/darkThemeIcon.png";
import lightModeIcon from "../assets/lightThemeIcon.png";

type HeaderProps = {
    title: string;
    subtitle?: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
const { toggleTheme, theme } = useTheme();
    return(
        <header className="header">
            <h1 className="header__heading">{ title }</h1>
            <img
                className="header__button"
                src={ theme === "light" ? darkModeIcon: lightModeIcon }
                onClick={ toggleTheme } 
            />
        </header>
    );
}

export default Header;