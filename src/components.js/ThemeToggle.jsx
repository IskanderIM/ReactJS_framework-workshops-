import { createContext, useContext } from "react";
import { MaterialUISwitch } from "./MaterialUISwitch";

// Создаём контекст для темы и заметок
export const ThemeContext = createContext();

// Создаём пользовательские хуки для удобства пользования контекстов
const useTheme = () => useContext(ThemeContext);

//Компонент для переключения темы
export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <MaterialUISwitch onClick={toggleTheme} />
    );
};
