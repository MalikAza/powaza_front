import { Transition } from "@headlessui/react"
import { TimelineObject } from "../../types/timeline"
import { useEffect, useState } from "react"

type Props = TimelineObject & { index: number }

function VerticalTimelineElement({ time, title, description, link, index }: Props) {
  const [show, setShow] = useState(false)
  const [dotVisible, setDotVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 200 * index)

    return () => clearTimeout(timer)
  }, [index])

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setDotVisible(true)
      }, 1000) // match with the duration of the transition

      return () => clearTimeout(timer)
    }
  }, [show])

  const linkElement = () => {
    if (link) return (
      <a href={link.url} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        {link.title}
        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    )
  }

  return (
    <li className="mb-10 ms-4 last:mb-0">
      <div className={`absolute w-3 h-3 bg-dark-turquoize rounded-full mt-1.5 -start-1.5 border border-silver dark:border-dark-asphalt dark:bg-turquoize
        transition-opacity duration-500 ${dotVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      <Transition
        show={show}

        enter='transition-all ease-in-out duration-1000 transform'
        enterFrom='opacity-0 translate-x-full'
        enterTo='opacity-100 translate-x-0'
      >
        <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{time.toLocaleDateString('en-US', {month:"long", year:"numeric"})}</time>
        <h3 className="text-lg font-semibold text-dark-asphalt dark:text-silver">{title}</h3>
        <p className="mb-4 text-base font-normal text-wet-asphalt dark:text-dark-silver" dangerouslySetInnerHTML={{__html: description}}></p>
        {linkElement()}
      </Transition>
    </li>
  )
}

export default VerticalTimelineElement