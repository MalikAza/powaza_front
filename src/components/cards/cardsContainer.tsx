import type { Card } from "../../types/cards"
import CardElement from "./cardElement"

type Props = {
  cards: Card[]
}

function CardsContainer({cards}: Props) {
  return (
    <div className="cards-container grid grid-cols-1 sm:grid-cols-3 gap-6">
      {cards.map((card, index) => {

        return (
          <div key={index} className="col-span-1 sm:col-span-1">
            <CardElement title={card.title} description={card.description} url={card.url} img_url={card.img_url}/>
          </div>
        )
      })}
    </div>
  )
}

export default CardsContainer