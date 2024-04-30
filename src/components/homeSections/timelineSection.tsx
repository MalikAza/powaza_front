import { TimelineObject } from "../../types/timeline"
import VerticalTimeline from "../verticalTimeline/verticalTimeline"

function TimelineSection() {

  const timelineObjects: TimelineObject[] = [
    {
      time: new Date('2016-01-02'),
      title: 'Self-taught',
      description: `Made & improved a
      <a href="https://python.org" target="_blank" class="dark:text-turquoize text-dark-turquoize hover:underline">
        <img src="/images/Python-logo-notext.png" class="h-4 inline-block align-middle" /> Python</a>
      bot for the <a href="https://discord.gg" target="_blank" class="dark:text-turquoize text-dark-turquoize hover:underline">
        <img src="/images/Discord_Logo_sans_texte.png" class="h-4 inline-block align-middle" /> Discord<a/> application`,
    },
    {
      time: new Date('2020-01-04'),
      title: 'Medical professions',
      description: 'Until this date: Laboratory technician & Paramedic'
    },
    {
      time: new Date('2021-05-01'),
      title: 'Distance learning',
      description: 'In Computer programming; in order to make a passion a real full-time job'
    },
    {
      time: new Date('2022-12-18'),
      title: 'Application Designer & Developer',
      description: `Took a 15 months work study program 
      with <a href="https://le-campus-numerique.fr/campus-valence/" target="_blank" class="text-[rgb(220,63,99)] hover:underline">Le Campus Numérique - In The Alps</a> 
      at <a href="" target="_blank" class="text-[rgb(222,123,57)] hover:underline">Let's Co</a> to make things more serious`
    }
  ]

  return (
    <section id="timeline" className="overflow-hidden pl-2 h-[572px] md:h-[500px]"> {/* Arbitrary height value for the next section */}
      <h3 className="text-dark-turquoize dark:text-turquoize mb-2 text-xl">Where I started</h3>
      <VerticalTimeline timelineObjects={timelineObjects} />
    </section>
  )
}

export default TimelineSection