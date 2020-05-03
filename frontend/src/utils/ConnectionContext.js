import React, { createContext, useState, useContext } from 'react';

const ConnectionProvider = createContext(false);

export default function ConnectionProvider({children}) {
    const getConnectionFromLocalStorage = () => JSON.parse(localStorage.getItem("@Connection"));
    const [socket, setSocket] = useState(getThemeFromLocalStorage() ?? false);


    // const socket = useMemo(() => socketio('http://localhost:3333', {
    //     query: { user_id: email, room: 'BillGatesTalk' },
    // }), [email, password]);



    const changeTheme = theme => {
        localStorage.setItem("@DarkMode", JSON.stringify(theme));
        setDarkMode(theme);
    }

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