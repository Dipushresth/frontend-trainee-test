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
