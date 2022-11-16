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
        document.querySelectorAll('.bg-dark').forEach((el) => {
          el.classList.remove('bg-dark');
          el.classList.add('bg-light');
        });

        document.querySelectorAll('.text-white').forEach((el) => {
          el.classList.remove('text-white');
          el.classList.add('text-black');
        });

        document.querySelectorAll('.banner').forEach((el) => {
          el.classList.add('banner-light');
        });

        var array = document.getElementsByClassName("featureSvg");
        for(var i = 0; i < array.length; i++)
        {
          var elements = array[i].getElementsByClassName("primaryColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#edd018';
        }

        var array = document.getElementsByTagName("h1");
        for(var i = 0; i < array.length; i++)
        {
          array[i].style.color = '#000';
        }
  
        break;
      case themes.dark:
      default:
        document.querySelectorAll('.bg-light').forEach((el) => {
          el.classList.remove('bg-light');
          el.classList.add('bg-dark');
        });

        document.querySelectorAll('.text-black').forEach((el) => {
          el.classList.remove('text-black');
          el.classList.add('text-white');
        });

        document.querySelectorAll('.banner-light').forEach((el) => {
          el.classList.remove('banner-light');
        });

        var array = document.getElementsByClassName("featureSvg");
        for(var i = 0; i < array.length; i++)
        {
          var elements = array[i].getElementsByClassName("primaryColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#ec008c';
        }

        var array = document.getElementsByTagName("h1");
        for(var i = 0; i < array.length; i++)
        {
          array[i].style.color = '#fff';
        }
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}