import React, { useEffect, useState } from "react";

function useDarkTheme(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const className = 'dark';
    const element = document.documentElement;
    const transitionClass = 'theme-transition';

    if (darkTheme) {
      element.classList.add(className);
      Array.from(document.getElementsByClassName(transitionClass)).forEach(el => {
        el.classList.add('transition-colors', 'duration-500');
      });
    } else {
      element.classList.remove(className);
    }

    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  return [darkTheme, setDarkTheme];
};

export default useDarkTheme