"use client"
import UserCard from "@/components/common/UserCard"
import { AlertCircle, LoaderCircle, Search } from "lucide-react"
import { User } from "../interface"

interface UserListPageInterface {
  users: User[]
  searchItem: string
  setSearchItem: (value: string) => void
  isLoading?: boolean
  error?: string | null
}

export default function UserListPage({
  users,
  searchItem,
  setSearchItem,
  isLoading = false,
  error = null,
}: UserListPageInterface) {
  return (
    <div className="h-full">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold">Users</h1>
        <p className="text-gray-400">View all users in the list</p>
      </div>
      <div className="relative mb-8">
        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="w-full rounded-sm border border-black/5 bg-white py-4 pr-4 pl-12 shadow-sm transition-all focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
        />
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <LoaderCircle className="mb-4 h-10 w-10 animate-spin" />
          <p className="font-medium">Loading users...</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center rounded-2xl border border-red-100 bg-red-100 p-8 text-center">
          <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
          <h3 className="mb-2 text-lg font-bold">Something went wrong</h3>
          <p className="text-red-700">{error}</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}
