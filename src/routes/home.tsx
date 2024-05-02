import { useEffect } from "react"
import HeroSection from "../components/homeSections/heroSection"
import ProjectsSection from "../components/homeSections/projectsSection"
import TimelineSection from "../components/homeSections/timelineSection"
import PageContainer from "../components/pageContainer"

function Home() {
  const konamiPattern = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ]
  let konamiPatternPosition = 0

  useEffect(() => {
    function konamiCodeHandler(event: KeyboardEvent) {
      if (event.key === konamiPattern[konamiPatternPosition]) {
        konamiPatternPosition++
        if (konamiPatternPosition === konamiPattern.length) {
          konamiPatternPosition = 0
          console.log("Konami code activated!")
        }
      } else {
        konamiPatternPosition = 0
      }
    }
  
    window.addEventListener("keydown", konamiCodeHandler)

    // Cleanup
    return () => {
      window.removeEventListener("keydown", konamiCodeHandler)
    }
  }, []) // run once on mount and cleanup on unmount

  return (
    <PageContainer>
      <main>
        <HeroSection />
        <TimelineSection />
        <ProjectsSection />
      </main>
    </PageContainer>
  )
}

export default Home