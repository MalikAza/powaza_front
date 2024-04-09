import { useEffect, useState } from "react"
import { TimelineObject } from "../../types/timeline"
import VerticalTimelineElement from "./verticalTimelineElement"

type Props = {
  timelineObjects: TimelineObject[]
}

function VerticalTimeline({timelineObjects}: Props) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 200 * timelineObjects.length)

    return () => clearTimeout(timer)
  }, [timelineObjects.length])

  return (
    <ol className="relative">
      <div className={`absolute top-0 left-0 bottom-0 border-s border-dark-asphalt dark:border-dark-silver
        transition-all duration-500 ease-in-out ${isLoaded ? 'h-full' : 'h-0'}`} />
      {timelineObjects.map((object, index) => {
        return <VerticalTimelineElement
          key={index}
          time={object.time}
          title={object.title}
          description={object.description}
          link={object.link}
          index={index}
        />
      })}
    </ol>
  )
}

export default VerticalTimeline