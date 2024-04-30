import type { Card } from "../../types/cards"

function CardElement({title, description, url, img_url}: Card) {
  return (
    <div className="rounded-lg border-2 border-dark-asphalt dark:border-silver overflow-hidden h-full 
    transition duration-500 ease-out hover:-translate-y-2">
      <a className="cursor-pointer" href={url} target="_blank">
        <div className="flex justify-center items-center h-32 py-2">
          <img className="max-h-[50%]" src={img_url} alt={title} />
        </div>
        <div className="p-2 relative bg-dark-silver dark:bg-wet-asphalt h-full">
          <h4 className="pb-4 font-bold">{title}</h4>
          <div className="italic text-sm z-0" dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
      </a>
    </div>
  )
}

export default CardElement