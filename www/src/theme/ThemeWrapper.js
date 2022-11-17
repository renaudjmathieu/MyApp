import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.getElementById("lightToggleIcon").style.display = "block";
        document.getElementById("darkToggleIcon").style.display = "none";

        document.querySelectorAll('body').forEach((el) => {
          el.classList.add('theme-light');
          el.classList.remove('theme-dark');
        });

        document.querySelectorAll('.featureSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#edd018';
        });

        document.querySelectorAll('.headerSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#000';
        });

        document.querySelectorAll('.banner').forEach((el) => {
          el.classList.add('banner-light');
        });

        document.querySelectorAll('.bg-dark').forEach((el) => {
          el.classList.add('bg-light');
          el.classList.remove('bg-dark');
        });

        break;
        
      case themes.dark:
      default:
        document.getElementById("lightToggleIcon").style.display = "none";
        document.getElementById("darkToggleIcon").style.display = "block";

        document.querySelectorAll('body').forEach((el) => {
          el.classList.remove('theme-light');
          el.classList.add('theme-dark');
        });

        document.querySelectorAll('.featureSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#ec008c';
        });

        document.querySelectorAll('.headerSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#fff';
        });

        document.querySelectorAll('.banner-light').forEach((el) => {
          el.classList.remove('banner-light');
        });

        document.querySelectorAll('.bg-light').forEach((el) => {
          el.classList.remove('bg-light');
          el.classList.add('bg-dark');
        });
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}