"use client"
import { cn } from "@/lib/utils"
import { Gauge, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [{ href: "/users", label: "Users", icon: Users }]
const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className="hidden w-65 overflow-auto border-r border-black/5 bg-slate-50 md:block">
      <div className="p-6">
        <div className="mb-8 flex items-center gap-2">
          <Gauge className="h-6 w-6 text-blue-500" />
          <span className="text-2xl font-bold">DashBoard</span>
        </div>
        <nav className="space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-2 rounded-sm px-3 py-2 focus:outline-none",
                  isActive ? "bg-blue-50 text-blue-500" : ""
                )}
              >
                <Icon
                  className={cn('${isActive ? "text-blue-500" : ""} h-4 w-4')}
                />
                <span className="font-medium">{label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
