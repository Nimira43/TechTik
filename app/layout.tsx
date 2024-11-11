import type { Metadata } from 'next'
import { Poppins } from 'next/font/google' 
import './globals.css'
import MainNav from '@/components/MainNav'
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'TechTik',
  description: 'Technology ticking app using Next JS, Tailwind, Shadcn-ui, Prisma and MySQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <nav className='flex flex-col items-center border-b mb-5 px-5 py-3'>
            <div className='max-w-6xl w-full'>
              <MainNav />  
            </div>   
          </nav>
          <main className='flex flex-col items-center'>
            <div className='max-w-6xl w-full'>
              {children}
            </div>
          </main>
        </ThemeProvider>
        
      </body>
    </html>
  )
}
