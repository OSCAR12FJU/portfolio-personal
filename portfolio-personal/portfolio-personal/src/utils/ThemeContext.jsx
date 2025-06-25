import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('dark');

    useEffect(() =>{
        const storedTheme = localStorage.getItem('theme');
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = storedTheme || 'dark';

        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    const toggleTheme = () =>{
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    return(
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>

    )
}


export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if(!context) throw new Error('useTheme debe usarse dentro de <ThemeProvider>')
    return context;
}