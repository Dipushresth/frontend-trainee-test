import { User } from "@/shared/interface"
import { useQuery } from "@tanstack/react-query"

const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return response.json()
}

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  })
}
