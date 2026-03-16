import { Post, User } from "@/shared/interface"
import { create } from "zustand"

interface DashboardState {
  users: User[]
  posts: Post[]
  isAppLoading: boolean
  error: string | null
  searchItem: string
  setUsers: (users: User[]) => void
  setPosts: (posts: Post[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setSearchItem: (value: string) => void

  addPost: (post: Post) => void
  getLocalPosts: () => Post[]
}

export const useStore = create<DashboardState>((set, get) => ({
  users: [],
  posts: [],
  searchItem: "",
  isAppLoading: false,
  error: null,
  setUsers: (users) => set({ users }),
  setPosts: (posts) => set({ posts }),
  setLoading: (loading) => set({ isAppLoading: loading }),
  setError: (error) => set({ error }),
  setSearchItem: (value) => set({ searchItem: value }),
  addPost: (post) => {
    const localPosts = JSON.parse(localStorage.getItem("localPosts") || "[]")
    const updatedLocalPosts = [post, ...localPosts]
    localStorage.setItem("localPosts", JSON.stringify(updatedLocalPosts))
    set((state) => ({ posts: [post, ...state.posts] }))
  },
  getLocalPosts: () => {
    return JSON.parse(localStorage.getItem("localPosts") || "[]")
  },
}))
