"use client"

import { useEffect } from "react"
import { useUsers } from "@/hooks/useUsers"
import { useStore } from "@/store/useStore"
import UserCard from "@/components/organisms/UserCard"
import { AlertCircle, LoaderCircle } from "lucide-react"

export default function UserListPage() {
  const { users, setUsers, searchItem, setSearchItem } = useStore()
  const { data, isLoading, isError, error } = useUsers()

  useEffect(() => {
    if (data) setUsers(data)
  }, [data, setUsers])

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      u.email.toLowerCase().includes(searchItem.toLowerCase())
  )

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-400">
        <LoaderCircle className="mb-4 h-10 w-10 animate-spin" />
        <p className="font-medium">Loading users...</p>
      </div>
    )
  if (isError)
    return (
      <div className="flex flex-col items-center rounded-2xl border border-red-100 bg-red-100 p-8 text-center">
        <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
        <h3 className="mb-2 text-lg font-bold">Something went wrong</h3>
        <p className="text-red-700">{error.message}</p>
      </div>
    )

  return (
    <div>
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold">Users</h1>
        <p className="text-gray-400">View all users in the list</p>
      </div>
      <div className="relative mb-8">
        <input
          placeholder="Search by name or email..."
          className="w-full rounded-sm border border-black/5 bg-white py-4 pr-4 pl-12 shadow-sm transition-all focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
