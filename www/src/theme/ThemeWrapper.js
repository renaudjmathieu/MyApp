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

        document.querySelectorAll('.bg-dark').forEach((el) => {
          el.classList.remove('bg-dark');
          el.classList.add('bg-light');
        });

        document.querySelectorAll('.btn').forEach((el) => {
          el.style.backgroundColor = "#ec008c";
          el.style.borderColor = "#ec008c";
          el.style.color = "#fff";
        });

        /*
        document.querySelectorAll('.dropdown-item').forEach((el) => {
          el.classList.remove('dropdown-item-dark');
          el.classList.add('dropdown-item-light');
        });
        */

        document.querySelectorAll('.nav-link').forEach((el) => {
          el.style.color = "#000";
          el.addEventListener('mouseover', function () {
            el.style.color = '#ec008c';
          });
          el.addEventListener('mouseout', function () {
            el.style.color = '#000';
          });
        });

        document.querySelectorAll('.text-white').forEach((el) => {
          el.classList.remove('text-white');
          el.classList.add('text-black');
        });

        document.querySelectorAll('.banner').forEach((el) => {
          el.classList.add('banner-light');
        });

        document.querySelectorAll('.featureSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#edd018';
        });

        document.querySelectorAll('.headerSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#000';
        });

        document.querySelectorAll('.h1').forEach((el) => {
          el.style.color = '#000';
        });

        break;
      case themes.dark:
      default:
        document.getElementById("lightToggleIcon").style.display = "none";
        document.getElementById("darkToggleIcon").style.display = "block";

        document.querySelectorAll('.bg-light').forEach((el) => {
          el.classList.remove('bg-light');
          el.classList.add('bg-dark');
        });

        document.querySelectorAll('.btn').forEach((el) => {
          el.style.backgroundColor = "#edd018";
          el.style.borderColor = "#edd018";
          el.style.color = "#000";
        });

        /*
        document.querySelectorAll('.dropdown-item').forEach((el) => {
          el.classList.remove('dropdown-item-light');
          el.classList.add('dropdown-item-dark');
        });
        */

        document.querySelectorAll('.nav-link').forEach((el) => {
          el.style.color = "#fff";
          el.addEventListener('mouseover', function () {
            el.style.color = '#edd018';
          });
          el.addEventListener('mouseout', function () {
            el.style.color = '#fff';
          });
        });

        document.querySelectorAll('.text-black').forEach((el) => {
          el.classList.remove('text-black');
          el.classList.add('text-white');
        });

        document.querySelectorAll('.banner-light').forEach((el) => {
          el.classList.remove('banner-light');
        });

        document.querySelectorAll('.featureSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#ec008c';
        });

        document.querySelectorAll('.headerSvg').forEach((el) => {
          var elements = el.getElementsByClassName("currentColor");
          for (var j = 0; j < elements.length; j++) elements[j].style.fill = '#fff';
        });

        document.querySelectorAll('.h1').forEach((el) => {
          el.style.color = '#fff';
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