import HeroSection from "../components/homeSections/heroSection"
import ProjectsSection from "../components/homeSections/projectsSection"
import TimelineSection from "../components/homeSections/timelineSection"
import PageContainer from "../components/pageContainer"

function Home() {

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