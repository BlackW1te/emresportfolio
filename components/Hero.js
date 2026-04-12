'use client'

import { motion } from 'framer-motion'

const translations = {
    tr: {
        available: 'Projelere Açığım',
        greeting1: 'Merhaba! Ben',
        greeting2: 'bir',
        greeting3: 'dan',
        role: 'Mobil Uygulama Geliştiricisiyim',
        location: 'İstanbul',
        tagline: 'Flutter ile modern, performanslı mobil deneyimler tasarlıyorum.',
        since: '(2022 – GÜNÜMÜZ)',
    },
    en: {
        available: 'Available for Projects',
        greeting1: "Hi! I'm",
        greeting2: 'a',
        greeting3: 'from',
        role: 'Mobile Developer',
        location: 'Istanbul',
        tagline: 'I build modern, performant mobile experiences with Flutter & Dart.',
        since: '(2022 – PRESENT)',
    },
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0, 0, 1.0] } },
}

export default function Hero({ lang }) {
    const t = translations[lang]

    return (
        <section
            id="hero"
            className="hero-section"
            style={{
                minHeight: '100vh',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr)',
                background: 'var(--md-background)',
                position: 'relative',
                overflow: 'hidden',
                '--sidebar-width': '280px',
            }}
        >
            <style jsx>{`
                .hero-section {
                    grid-template-columns: var(--sidebar-width) 1fr !important;
                }
                @media (max-width: 900px) {
                    .hero-section {
                        grid-template-columns: 1fr !important;
                        display: flex !important;
                        flex-direction: column !important;
                    }
                    .hero-sidebar {
                        width: 100% !important;
                        border-right: none !important;
                        border-bottom: 1px solid var(--md-outline-variant) !important;
                        padding: 100px 32px 32px !important;
                        flex-direction: row !important;
                        align-items: center !important;
                        gap: 24px !important;
                    }
                    .hero-content {
                        padding: 48px 32px !important;
                    }
                    .since-label {
                        position: static !important;
                        margin-top: 8px !important;
                    }
                }
            `}</style>
            {/* Background diagonal pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
          -55deg,
          transparent,
          transparent 40px,
          var(--md-outline-variant) 40px,
          var(--md-outline-variant) 41px
        )`,
                opacity: 0.25,
                pointerEvents: 'none',
            }} />

            {/* Left Sidebar */}
            <motion.div
                className="hero-sidebar"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0, 0, 1.0] }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '120px 40px 40px',
                    borderRight: '1px solid var(--md-outline-variant)',
                    gap: '16px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Profile Photo */}
                <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'var(--md-primary-container)',
                    border: '2px solid var(--md-outline-variant)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                }}>
                    👤
                </div>

                {/* Name & Title */}
                <div>
                    <p style={{
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--md-on-surface)',
                        marginBottom: '4px',
                    }}>
                        Fatih Emre İşgören
                    </p>
                    <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--md-on-surface-variant)',
                    }}>
                        {lang === 'tr' ? 'Mobil Geliştirici' : 'Mobile Developer'}
                    </p>
                </div>

                {/* Social Icons */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                    {[
                        { icon: '𝕏', href: 'https://twitter.com' },
                        { icon: '📷', href: 'https://instagram.com' },
                        { icon: '💼', href: 'https://linkedin.com' },
                        { icon: '🐙', href: 'https://github.com' },
                    ].map((s) => (
                        <motion.a
                            key={s.icon}
                            href={s.href}
                            target="_blank"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                fontSize: '1rem',
                                color: 'var(--md-on-surface-variant)',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Since - bottom left */}
                <p 
                    className="since-label"
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '40px',
                        fontSize: '0.75rem',
                        color: 'var(--md-on-surface-variant)',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                    }}>
                    {t.since}
                </p>
            </motion.div>

            {/* Right Main Area */}
            <motion.div
                className="hero-content"
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '120px 64px 64px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Available Badge */}
                <motion.div
                    variants={item}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '32px',
                        width: 'fit-content',
                    }}
                >
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px #22c55e',
                        display: 'inline-block',
                    }} />
                    <span style={{
                        fontSize: '0.85rem',
                        color: 'var(--md-on-surface-variant)',
                        fontWeight: 500,
                    }}>
                        {t.available}
                    </span>
                </motion.div>

                {/* Big Typography */}
                <motion.div variants={item}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                        fontWeight: 400,
                        color: 'var(--md-on-background)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                    }}>
                        {/* Line 1: Hi! I'm [Name Pill] */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexWrap: 'nowrap',
                                marginBottom: '8px',
                            }}
                        >
                            <span>{t.greeting1}</span>

                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '20px 26px',
                                    borderRadius: '100px',
                                    background: 'var(--md-on-secondary)',
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                                    fontSize: '42px',
                                    fontWeight: 600,
                                    letterSpacing: '-0.04em',
                                    lineHeight: '42px',
                                    color: 'var(--md-on-surface)',
                                    cursor: 'default',
                                    whiteSpace: 'nowrap',
                                    width: 'fit-content',
                                    height: 'fit-content',
                                }}
                            >
                                Fatih Emre İşgören
                            </motion.span>
                        </div>

                        {/* Line 2: a [Role Pill] from [Location Pill] */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                flexWrap: 'wrap',
                                marginBottom: '8px',
                            }}
                        >
                            <span>{t.greeting2}</span>
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 'fit-content',
                                    padding: 'clamp(12px, 1.6vw, 20px) clamp(18px, 2vw, 26px)',
                                    borderRadius: '100px',
                                    background: 'var(--md-on-surface)',
                                    fontSize: 'clamp(1.5rem, 2.8vw, 42px)',
                                    fontWeight: 700,

                                    letterSpacing: '-0.04em',
                                    lineHeight: '1',
                                    color: '#FFFFFF',
                                    cursor: 'default',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {t.role}
                            </motion.span>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                flexWrap: 'wrap',
                                marginBottom: '8px',
                            }}
                        >
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 'fit-content',
                                    padding: 'clamp(12px, 1.6vw, 20px) clamp(18px, 2vw, 26px)',
                                    borderRadius: '100px',
                                    background: 'transparent',
                                    border: '2px solid var(--md-on-surface)',
                                    fontSize: 'clamp(1.5rem, 2.8vw, 42px)',
                                    fontWeight: 700,

                                    letterSpacing: '-0.04em',
                                    lineHeight: '1',
                                    color: 'var(--md-on-surface)',
                                    cursor: 'default',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {t.location}
                            </motion.span>
                            <span>{t.greeting3}</span>
                        </div>
                    </h1>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={item}
                    style={{
                        marginTop: '32px',
                        fontSize: '1rem',
                        color: 'var(--md-on-surface-variant)',
                        lineHeight: 1.7,
                        maxWidth: '480px',
                    }}
                >
                    {t.tagline}
                </motion.p>

                {/* Tech Chips */}
                <motion.div
                    variants={item}
                    style={{ display: 'flex', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}
                >
                    {['Flutter', 'Dart', 'Firebase', 'Python', 'Kotlin'].map((tech) => (
                        <motion.span
                            key={tech}
                            whileHover={{ scale: 1.08, y: -2 }}
                            style={{
                                padding: '6px 14px',
                                borderRadius: '8px',
                                background: 'var(--md-secondary-container)',
                                color: 'var(--md-on-secondary-container)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                cursor: 'default',
                            }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}