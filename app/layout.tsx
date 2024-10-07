import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TechTik",
  description: "Technology ticking app using Next JS, Tailwind, Prisma and MySQL",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  )
}
