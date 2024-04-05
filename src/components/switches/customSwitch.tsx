import { Switch } from "@headlessui/react"
import React from "react"

type Props = {
  selected: boolean
  setSelected: React.Dispatch<React.SetStateAction<boolean>>
  srMessage?: string
}

function CustomSwitch({selected, setSelected, srMessage}: Props) {
  return (
    <Switch
      checked={selected}
      onChange={setSelected}
      className={`flex rounded-full bg-dark-silver dark:bg-wet-asphalt h-5 w-10 cursor-pointer p-1`}
    >
      <span className="sr-only">{srMessage}</span>
      <span
        className={`flex w-full h-full rounded-full mr-5 transform ease-in-out duration-500 shadow-[0_0_6px_1px]` + ' '
        + (selected ? `bg-turquoize translate-x-5 shadow-turquoize` : 'bg-wet-asphalt dark:bg-silver shadow-wet-asphalt dark:shadow-silver')
        }
      ></span>
    </Switch>
  )
}

export default CustomSwitch