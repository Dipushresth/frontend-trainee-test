import { useQuery } from "@tanstack/react-query"
import { Post } from "@/shared/interface"

const getUserPosts = async (userId: number): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
  if (!res.ok) throw new Error(`Failed to fetch posts for user ${userId}`)
  return res.json()
}

export const useUserPosts = (userId: number) => {
  return useQuery<Post[], Error>({
    queryKey: ["userPosts", userId],
    queryFn: () => getUserPosts(userId),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  })
}
