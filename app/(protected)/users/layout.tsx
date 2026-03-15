"use client"

import React from "react"

import Sidebar from "@/shared/components/Sidebar"

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex max-h-screen min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  )
}
