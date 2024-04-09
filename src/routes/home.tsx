import HeroSection from "../components/homeSections/heroSection"
import TimelineSection from "../components/homeSections/timelineSection"
import PageContainer from "../components/pageContainer"

function Home() {

  return (
    <PageContainer>
      <main>
        <HeroSection />
        <TimelineSection />
      </main>
    </PageContainer>
  )
}

export default Home