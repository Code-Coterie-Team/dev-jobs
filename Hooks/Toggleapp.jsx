import { useEffect, useState } from "react";

const ToggleMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark");
    const colorTheme = theme === "dark" ? "light" : "dark"; // Improved logic for colorTheme

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return { colorTheme, setTheme }; // Improved return structure
}

export default ToggleMode;