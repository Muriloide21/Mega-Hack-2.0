import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(false);

export default function ThemeProvider({children}) {
    const getThemeFromLocalStorage = () => JSON.parse(localStorage.getItem("@DarkMode"));
    const [darkMode, setDarkMode] = useState(getThemeFromLocalStorage() ?? false);


    const changeTheme = theme => {
        localStorage.setItem("@DarkMode", JSON.stringify(theme));
        setDarkMode(theme);
    }

    //TODO: manter tema anterior do recarregamento da página

    return (
        <ThemeContext.Provider value={{themeDark: darkMode, setTheme: changeTheme}}>
            {children}
        </ThemeContext.Provider>
  );
}

export function useTheme(){
    const context = useContext(ThemeContext);
    return context;
} 