import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark"; 
// values are light & dark and type is string. can have different value but string type only.

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
//useTheme is a custom hook, it encapsulates useContext so wherever we want to use the useContext instead of importing useContext and ThemeContext and line 12 for every use we only import useTheme which returns the context. we will only need const context = useTheme(context);
//custom javascript function -> internally uses react hook -> becomes custom hook.

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ theme, setTheme ] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return(
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}
