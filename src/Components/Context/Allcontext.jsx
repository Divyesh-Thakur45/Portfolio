import { createContext, useState } from "react";

export const themeContext = createContext();

const AllContext = ({ children }) => {
    const [Theme, setTheme] = useState(false);
    const ModeChange = () => { setTheme(!Theme) }
    return (
        <themeContext.Provider value={{ ModeChange, Theme }}>
            {children}
        </themeContext.Provider>
    )
}

export default AllContext;