import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"

export default function RootPage() {
  return (
    <div className="flex max-h-screen min-h-screen items-center justify-center gap-8">
      <Link href="/web" className="group block w-full max-w-sm">
        <Card className="transition-all duration-200 group-hover:scale-[1.02] group-hover:border-blue-300 group-hover:shadow-lg">
          <CardHeader>
            <CardTitle>Website</CardTitle>
            <CardDescription>This is Web page view</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src="/web.jpg" alt="Web" width={400} height={400} />
          </CardContent>
        </Card>
      </Link>
      <Link href="/users" className="group block w-full max-w-sm">
        <Card className="transition-all duration-200 group-hover:scale-[1.02] group-hover:border-blue-300 group-hover:shadow-lg">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>This is dashboard view</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src="/dashboard.jpg" alt="Web" width={400} height={400} />
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
