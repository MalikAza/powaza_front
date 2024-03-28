import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import React, { useEffect, useState } from "react"

type Props = {
  isSelected: boolean
  setSelected: React.Dispatch<React.SetStateAction<boolean>>
}

function DarkThemeSwitch({isSelected, setSelected}: Props) {
  const [themePreference, _] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    setSelected(themePreference)

    let transitionColorsElements = document.getElementsByClassName('theme-transition')
    
    Array.from(transitionColorsElements).forEach(element => {
      element.classList.add('transition-colors', 'duration-500')
    })
  }, [themePreference, setSelected])

  useEffect(() => {
    localStorage.setItem('theme', isSelected ? 'dark' : 'light')
  }, [isSelected])

  return (
    <div
      className={`flex rounded-full dark:bg-silver bg-wet-asphalt h-5 w-10 cursor-pointer p-1`}
      onClick={() => setSelected(!isSelected)}
    >
      <span
        className={`flex w-full h-full rounded-full mr-5 transform ease-in-out duration-500` + ' '
        + (isSelected ? `translate-x-5 drop-shadow-[0_0_3px_rgb(26,188,156)]` : 'dark:bg-silver drop-shadow-[0_0_3px_rgb(52,73,94)] dark:shadow-silver')
        }
        
      >
        <MoonIcon className={`text-turquoize absolute transition-all ease-in-out duration-500 ${isSelected ? 'opacity-100 delay-150' : 'opacity-0 delay-0'}`}/>
        <SunIcon className={`dark:text-wet-asphalt text-silver absolute transition-all ease-in-out duration-500 ${isSelected ? 'opacity-0 delay-0' : 'opacity-100 delay-150'}`}/>
      </span>
    </div>
  )
}

export default DarkThemeSwitch