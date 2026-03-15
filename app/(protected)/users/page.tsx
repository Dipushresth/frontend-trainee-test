"use client"
import UserListPage from "@/shared/components/UserListPage"
import { useStore } from "@/store/useStore"
import { useEffect, useState } from "react"

export default function UsersPage() {
  const [searchItem, setSearchItem] = useState("")

  const { users, setUsers, isAppLoading, setLoading, error, setError } =
    useStore()
  async function getUsers() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!res.ok) throw new Error("Failed to fetch users")
      const response = await res.json()
      console.log("new response", response)
      setUsers(response)
    } catch (error: any) {
      setError(error.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (users.length === 0) {
      console.log("useEffect running")
      getUsers()
    }
  }, [])

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      u.email.toLowerCase().includes(searchItem.toLowerCase())
  )
  return (
    <UserListPage
      users={filteredUsers}
      searchItem={searchItem}
      setSearchItem={setSearchItem}
      isLoading={isAppLoading}
      error={error}
    />
  )
}
