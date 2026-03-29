'use client'

import { motion } from 'framer-motion'

const translations = {
    tr: {
        greeting: 'Merhaba, ben',
        title: 'Mobil Uygulama Geliştirici',
        subtitle: 'Flutter & Dart ile modern, performanslı mobil deneyimler tasarlıyorum.',
        cta: 'Projelerimi Gör',
        cv: 'CV İndir',
    },
    en: {
        greeting: "Hi, I'm",
        title: 'Mobile App Developer',
        subtitle: 'I build modern, performant mobile experiences with Flutter & Dart.',
        cta: 'See My Work',
        cv: 'Download CV',
    },
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1.0] } },
}

export default function Hero({ lang }) {
    const t = translations[lang]

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 32px',
                background: 'var(--md-background)',
            }}
        >
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{ maxWidth: '700px', width: '100%' }}
            >
                {/* Greeting */}
                <motion.p
                    variants={item}
                    style={{
                        color: 'var(--md-primary)',
                        fontWeight: 600,
                        fontSize: '1rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                    }}
                >
                    {t.greeting} Emre
                </motion.p>

                {/* Title */}
                <motion.h1
                    variants={item}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 800,
                        color: 'var(--md-on-background)',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                    }}
                >
                    {t.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={item}
                    style={{
                        fontSize: '1.1rem',
                        color: 'var(--md-on-surface-variant)',
                        lineHeight: 1.7,
                        marginBottom: '40px',
                        maxWidth: '500px',
                    }}
                >
                    {t.subtitle}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={item}
                    style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
                >
                    {/* Primary CTA */}
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: '14px 28px',
                            borderRadius: '20px',
                            background: 'var(--md-primary)',
                            color: 'var(--md-on-primary)',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            transition: 'box-shadow 0.2s',
                            boxShadow: '0 2px 8px rgba(103,80,164,0.3)',
                        }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(103,80,164,0.4)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(103,80,164,0.3)'}
                    >
                        {t.cta}
                    </motion.a>

                    {/* Secondary CV */}
                    <motion.a
                        href="/cv.pdf"
                        target="_blank"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: '14px 28px',
                            borderRadius: '20px',
                            border: '1px solid var(--md-outline)',
                            background: 'transparent',
                            color: 'var(--md-on-surface)',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                        }}
                    >
                        {t.cv}
                    </motion.a>
                </motion.div>

                {/* Floating chip */}
                <motion.div
                    variants={item}
                    style={{ marginTop: '48px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}
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