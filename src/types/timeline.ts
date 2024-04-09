export type TimelineObject = {
  time: Date
  title: string
  description: string
  link?: undefined|{
    url: string
    title: string
  }
}