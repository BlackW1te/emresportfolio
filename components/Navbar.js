'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const translations = {
    tr: { about: 'Hakkımda', projects: 'Projeler', contact: 'İletişim' },
    en: { about: 'About', projects: 'Projects', contact: 'Contact' },
}

export default function Navbar({ lang, setLang, theme, setTheme }) {
    const [scrolled, setScrolled] = useState(false)
    const t = translations[lang]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleTheme = () => {
        const next = theme === 'light' ? 'dark' : 'light'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
    }

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1.0] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '12px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: scrolled ? 'var(--md-surface)' : 'transparent',
                borderBottom: scrolled ? '1px solid var(--md-outline-variant)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1.0)',
            }}
        >
            {/* Logo */}
            <motion.span
                whileHover={{ scale: 1.05 }}
                style={{
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: 'var(--md-primary)',
                    cursor: 'pointer',
                }}
            >
                Emre.dev
            </motion.span>

            {/* Links */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {Object.entries(t).map(([key, label]) => (
                    <motion.a
                        key={key}
                        href={`#${key}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            color: 'var(--md-on-surface)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.target.style.background = 'var(--md-surface-variant)'}
                        onMouseLeave={e => e.target.style.background = 'transparent'}
                    >
                        {label}
                    </motion.a>
                ))}

                {/* Dil Switcher */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid var(--md-outline)',
                        background: 'transparent',
                        color: 'var(--md-on-surface)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                    }}
                >
                    {lang === 'tr' ? 'EN' : 'TR'}
                </motion.button>

                {/* Tema Switcher */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: 'none',
                        background: 'var(--md-primary-container)',
                        color: 'var(--md-on-primary-container)',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </motion.button>
            </div>
        </motion.nav>
    )
}