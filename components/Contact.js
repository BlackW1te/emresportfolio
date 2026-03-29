'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const translations = {
    tr: {
        title: 'İletişim',
        subtitle: 'Bir proje fikrin mi var? Konuşalım.',
        email: 'Mail Gönder',
        linkedin: 'LinkedIn',
        github: 'GitHub',
    },
    en: {
        title: 'Contact',
        subtitle: 'Have a project in mind? Let\'s talk.',
        email: 'Send Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
    },
}

const links = [
    {
        key: 'email',
        icon: '✉️',
        href: 'mailto:emre@example.com',
        color: 'var(--md-primary)',
        bg: 'var(--md-primary-container)',
        fgColor: 'var(--md-on-primary-container)',
    },
    {
        key: 'linkedin',
        icon: '💼',
        href: 'https://linkedin.com',
        color: 'var(--md-secondary)',
        bg: 'var(--md-secondary-container)',
        fgColor: 'var(--md-on-secondary-container)',
    },
    {
        key: 'github',
        icon: '🐙',
        href: 'https://github.com',
        color: 'var(--md-on-surface)',
        bg: 'var(--md-surface-variant)',
        fgColor: 'var(--md-on-surface-variant)',
    },
]

export default function Contact({ lang }) {
    const t = translations[lang]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="contact"
            ref={ref}
            style={{
                padding: '120px 32px',
                background: 'var(--md-surface)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.2, 0, 0, 1.0] }}
                    style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontWeight: 800,
                        color: 'var(--md-on-surface)',
                        marginBottom: '16px',
                    }}
                >
                    {t.title}
                    <span style={{ color: 'var(--md-primary)' }}>.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1.0] }}
                    style={{
                        color: 'var(--md-on-surface-variant)',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        marginBottom: '56px',
                    }}
                >
                    {t.subtitle}
                </motion.p>

                {/* Contact Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {links.map((link, i) => (
                        <motion.a
                            key={link.key}
                            href={link.href}
                            target={link.key !== 'email' ? '_blank' : undefined}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.2, 0, 0, 1.0] }}
                            whileHover={{ x: 8, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '20px 28px',
                                borderRadius: '20px',
                                background: link.bg,
                                textDecoration: 'none',
                                border: '1px solid var(--md-outline-variant)',
                                transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{link.icon}</span>
                            <span style={{
                                fontWeight: 700,
                                fontSize: '1rem',
                                color: link.fgColor,
                            }}>
                                {t[link.key]}
                            </span>
                            <span style={{
                                marginLeft: 'auto',
                                color: link.fgColor,
                                opacity: 0.6,
                                fontSize: '1.1rem',
                            }}>
                                →
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                        marginTop: '64px',
                        color: 'var(--md-on-surface-variant)',
                        fontSize: '0.85rem',
                        opacity: 0.7,
                    }}
                >
                    © 2025 Emre · Made with Next.js & ♥
                </motion.p>

            </div>
        </section>
    )
}