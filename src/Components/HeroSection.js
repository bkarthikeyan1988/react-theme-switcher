import React,  { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = ThemeSwitcher[theme];

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center",
        }}>
            <h1>Context API Theme Switcher</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam voluptatibus neque officiis obcaecati, quo tempore. Et modi doloremque dolorum ducimus culpa rem debitis itaque labore reprehenderit, sit placeat saepe!</p>
            <button style={{
                backgroundColor: `${currentTheme.btnColor}`,
                padding: "10px 50px",
                fontSize: "20px",
                color: '#FFF',
                border: `${currentTheme.border}`,
            }}>Click Me</button>
        </div>
    )
}

export default HeroSection;
