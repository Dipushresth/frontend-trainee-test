import { User } from "@/shared/interface"
import { motion } from "framer-motion"
import { Building2, Mail, Phone } from "lucide-react"
import Link from "next/link"

interface UserCardInterface {
  user: User
}

export default function UserCard({ user }: UserCardInterface) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1 }}
      className="t top-0 rounded-md border border-black/5 bg-white p-7 hover:shadow-2xl"
    >
      <h3 className="mb-3 text-lg font-semibold">{user.name}</h3>
      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          <span>{user.company.name}</span>
        </div>
      </div>

      <Link
        href={`/users/${user.id}`}
        className="mt-6 block w-full rounded-xl bg-blue-900 py-2.5 text-center font-medium text-white transition-colors hover:bg-blue-700"
      >
        View Posts
      </Link>
    </motion.div>
  )
}
