import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./font.css"
import "./globals.css"
import { cn } from "@/lib/utils"
import Sidebar from "@/shared/components/Sidebar"
import { Toaster } from "sonner"
import { Metadata } from "next"
import { QueryProvider } from "@/providers/QueryProvider"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Frontend Trainee Test Application",
    template: "Frontend | Trainee",
  },
  description: "Web page application built in Next.js",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        <QueryProvider>{children}</QueryProvider>

        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
