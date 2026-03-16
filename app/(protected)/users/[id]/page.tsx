"use client"
import { PaginationUi } from "@/components/molecules/PaginationUI"
import AddPostForm from "@/shared/components/AddPostForm"
import { useStore } from "@/store/useStore"
import { ArrowLeft, Building, Mail } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useMemo, useState } from "react"

interface UserListInterface {
  params: Promise<{ id: string }>
}

export default function UserPostId({ params }: UserListInterface) {
  const resolvedParams = React.use(params)
  const id = resolvedParams.id
  const POSTS_PER_PAGE = 4
  const [currentPage, setCurrentPage] = useState(1)
  const userId = Number(id)

  const {
    users,
    posts,
    setUsers,
    isAppLoading,
    setLoading,
    getLocalPosts,
    error,
    setPosts,
    setError,
  } = useStore()

  const user = users.find((u) => u.id === Number(id))
  console.log("new user here", user)
  console.log("new post here", posts)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        )
        if (!response.ok) throw new Error("Failed to fetch posts")
        const apiPosts = await response.json()

        const localPosts = getLocalPosts().filter(
          (p) => p.userId === Number(id)
        )
        setPosts([...localPosts, ...apiPosts])
      } catch (err: any) {
        setError(err.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [id])

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE
    const end = start + POSTS_PER_PAGE
    return posts.slice(start, end)
  }, [posts, currentPage])
  return (
    <div className="flex flex-col">
      <div className="min-h-[calc(100vh-70px)]">
        <Link
          href="/users"
          className="group mb-8 inline-flex items-center gap-2 text-blue-500 transition-colors hover:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Users
        </Link>
        <div className="flex justify-between">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold">
              {user ? `${user.name}'s Posts` : "User Posts"}
            </h1>
            {user && (
              <div className="flex gap-2 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Building size={12} /> {user.company.name}
                </span>
                <span>•</span>

                <span className="flex items-center gap-1">
                  <Mail size={12} /> {user.email}
                </span>
              </div>
            )}
          </div>
          <AddPostForm userId={userId} />
        </div>

        {isAppLoading && posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p>Somthing wrong</p>
        ) : (
          <div className="">
            {paginatedPosts.map((p, i) => (
              <div key={i} className="mb-2 rounded-sm border p-5">
                <h3 className="pb-1 font-bold">
                  {p.title.charAt(0).toUpperCase() + p.title.slice(1)}
                </h3>
                {p.body.charAt(0).toUpperCase() + p.body.slice(1)}
              </div>
            ))}
            {paginatedPosts.length === 0 && (
              <div className="py-12 text-center text-gray-400">
                No posts found for this user.
              </div>
            )}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pb-4">
          <PaginationUi
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  )
}
