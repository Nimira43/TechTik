import type { Metadata } from "next"
import "./globals.css"
import MainNav from "@/components/MainNav"

export const metadata: Metadata = {
  title: "TechTik",
  description: "Technology ticking app using Next JS, Tailwind, Shadcn-ui, Prisma and MySQL",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  )
}
