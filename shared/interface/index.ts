import { StaticImageData } from "next/image"

export interface User {
  id: number
  name: string
  username: string
  phone: number
  email: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
  isLocal?: boolean
}

export interface CardData {
  id: number
  title: string
  subTitle: string
  description: string
  color: string
  image: StaticImageData | string
  position: string
  carouselImages: (StaticImageData | string)[]
  hover: number
}
