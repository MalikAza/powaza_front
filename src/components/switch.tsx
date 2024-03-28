import React from "react"

type Props = {
  isSelected: boolean
  setSelected: React.Dispatch<React.SetStateAction<boolean>>
}

function Switch({isSelected, setSelected}: Props) {
  return (
    <div
      className={`flex rounded-full bg-silver dark:bg-wet-asphalt h-5 w-10 cursor-pointer p-1`}
      onClick={() => setSelected(!isSelected)}
    >
      <span
        className={`flex w-full h-full rounded-full mr-5 transform ease-in-out duration-500 shadow-[0_0_6px_1px]` + ' '
        + (isSelected ? `bg-turquoize translate-x-5 shadow-turquoize` : 'bg-wet-asphalt dark:bg-silver shadow-wet-asphalt dark:shadow-silver')
        }
        
      ></span>
    </div>
  )
}

export default Switch