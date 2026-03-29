'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const [lang, setLang] = useState('tr')
  const [theme, setTheme] = useState('light')

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