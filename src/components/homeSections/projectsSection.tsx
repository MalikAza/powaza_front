import { Card } from "../../types/cards"
import CardsContainer from "../cards/cardsContainer"

function ProjectsSection() {
  const cards: Card[] = [
    {
      title: 'pyZUnivers',
      description: `Python API wrapper for
        <a class="text-dark-turquoize dark:text-turquoize hover:underline" href="https://zunivers.zerator.com/" target="_blank">ZUnivers</a>`,
      url: 'https://github.com/MalikAza/pyZUnivers',
      img_url: '/images/pyZU.svg'
    },
    {
      title: 'Artichotel',
      description: 'Study project reflecting booking process for a hotel',
      url: 'https://artichotel.powaza.fr',
      img_url: '/images/artichotel-logo.svg'
    },
    {
      title: 'D20',
      description: 'A simple 20 face dice roll webpage',
      url: 'https://d20.powaza.fr',
      img_url: '/images/dice.png'
    },
    {
      title: 'ZUKonar',
      description: `Tracking friends accounts for
        <a class="text-dark-turquoize dark:text-turquoize hover:underline" href="https://zunivers.zerator.com/" target="_blank">ZUnivers</a>`,
      url: 'https://zukonar.powaza.fr',
      img_url: '/images/powi-zu.png'
    },
    {
      title: 'Spotify - Top 50 World',
      description: 'Study project learning React & Spotify API',
      url: 'https://spotiy-50-world.powaza.fr',
      img_url: '/images/spotify-50-world.svg'
    },
    {
      title: 'Labyrinthe',
      description: 'Study project for BFS & DFS algorithm',
      url: 'https://github.com/MalikAza/labyrinthe',
      img_url: '/images/cretan-labyrinth-circular-disc.png'
    },
  ]

  return (
    <section id="projects" className="overflow-hidden pl-2 mt-16">
      <h3 className="text-dark-turquoize dark:text-turquoize mb-6 text-xl">Several projects</h3>
      <CardsContainer cards={cards}/>
    </section>
  )
}

export default ProjectsSection