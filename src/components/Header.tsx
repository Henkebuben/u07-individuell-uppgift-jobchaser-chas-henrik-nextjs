'use client'

import styles from './Header.module.css';
import { useState, useContext } from "react";
import Nav from "@/components/Nav";
import SwitchBox from "@/components/SwitchBox";
import { ThemeContext } from "@/context/themeContext";


function Header(): React.JSX.Element {
    const [switchChecked, setSwitchChecked] = useState<boolean>(false);
    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("ThemeContext is undefined");
    }
    const {darkTheme, toggleTheme} = themeContext;

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#fff',
        color: darkTheme ? '#fff' : '#333',
        boxShadow: darkTheme ? 'var(--primary-box-shadow-dark-theme)' : 'var(--primary-box-shadow-light-theme)'
    };

    const handleCheckedChange = (value: boolean) => {
        setSwitchChecked(value);
        toggleTheme();
    };

    return (
        <header style={themeStyles} className={styles.header}>
            <div className={styles.div}></div>
            <Nav/>
            <SwitchBox status={["Dark/light-mode", "Dark/light-mode"]} checked={switchChecked} onCheckedChange={handleCheckedChange} />
        </header>
    )
}

export default Header