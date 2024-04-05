import { Switch } from "@headlessui/react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import useDarkTheme from "../../services/useDarkTheme"

function DarkThemeSwitch() {
  const [darkTheme, setDarkTheme] = useDarkTheme()

  return (
    <Switch
      checked={darkTheme}
      onChange={setDarkTheme}
      className='flex rounded-full dark:bg-silver bg-wet-asphalt h-5 w-10 cursor-pointer p-1'
    >
      <span className="sr-only">{'Switch to ' + (darkTheme ? 'light' : 'dark') + ' theme'}</span>
      <span
        className={`flex w-full h-full rounded-full mr-5 transform ease-in-out duration-500` + ' '
        + (darkTheme ? `translate-x-5 drop-shadow-[0_0_3px_rgb(26,188,156)]` : 'dark:bg-silver drop-shadow-[0_0_3px_rgb(52,73,94)] dark:shadow-silver')
        }
      >
        <MoonIcon className={`text-turquoize absolute transition-all ease-in-out duration-500 ${darkTheme ? 'opacity-100 delay-150' : 'opacity-0 delay-0'}`}/>
        <SunIcon className={`dark:text-wet-asphalt text-silver absolute transition-all ease-in-out duration-500 ${darkTheme ? 'opacity-0 delay-0' : 'opacity-100 delay-150'}`}/>
      </span>
    </Switch>
  )
}

export default DarkThemeSwitch