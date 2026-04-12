'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const [lang, setLang] = useState('tr')
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  // Load preferences
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'tr'
    const savedTheme = localStorage.getItem('theme') || 'light'
    setLang(savedLang)
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    setMounted(true)
  }, [])

  // Persist language
  useEffect(() => {
    if (mounted) localStorage.setItem('lang', lang)
  }, [lang, mounted])

  // Persist theme
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  if (!mounted) return null // Prevent hydration mismatch

  return (
    <main>
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </main>
  )
}