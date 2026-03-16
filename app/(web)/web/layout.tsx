"use client"

import Navbar from "@/components/organisms/Navbar"
import React from "react"

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="container">
        <main className="pages-layout">{children}</main>
      </div>
    </>
  )
}
