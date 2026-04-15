import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'Laith — Full Stack Developer', template: '%s | Laith' },
  description:
    'Full stack developer building fast, accessible, and beautiful digital experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/*
          Anti-FOUC: runs synchronously before React hydrates so the correct
          theme class is already on <html> on first paint.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(s||p);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-surface text-content antialiased font-sans transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
