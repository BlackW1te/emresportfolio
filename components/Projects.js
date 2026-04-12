'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectModal from './ProjectModal'

const projects = [
    {
        id: 1,
        icon: '👾',
        title: 'CyberKids',
        category: 'Flutter · Firebase',
        tech: ['Flutter', 'Dart', 'Firebase', 'ElevenLabs', 'Go Router'],
        descTr: 'Çocuklar için gamification ile desteklenmiş siber güvenlik farkındalık uygulaması. Duolingo tarzı animasyonlar, ses efektleri ve rozet sistemi içeriyor.',
        descEn: 'A gamified cyber security awareness app for kids. Features Duolingo-style animations, sound effects, and a badge system.',
        github: 'https://github.com',
        live: null,
    },
    {
        id: 2,
        icon: '🎨',
        title: 'Portfolio',
        category: 'Next.js · Framer Motion',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        descTr: 'M3 Expressive tasarım dili ile sıfırdan kodlanmış kişisel portfolyo sitesi. Tema değiştirme, dil desteği ve spring animasyonlar içeriyor.',
        descEn: 'Personal portfolio site built from scratch with M3 Expressive design language. Features theme switching, language support, and spring animations.',
        github: 'https://github.com',
        live: null,
    },
    {
        id: 3,
        icon: '🔐',
        title: 'Auth System',
        category: 'Flutter · Firebase Auth',
        tech: ['Flutter', 'Firebase Auth', 'Dart'],
        descTr: 'Firebase Auth tabanlı, güvenli ve modüler kimlik doğrulama sistemi. Clean architecture ile yazılmış.',
        descEn: 'Secure and modular authentication system based on Firebase Auth. Written with clean architecture.',
        github: 'https://github.com',
        live: null,
    },
]

const translations = {
    tr: { title: 'Projeler', subtitle: 'Üzerinde çalıştığım bazı projeler' },
    en: { title: 'Projects', subtitle: 'Some projects I have been working on' },
}

export default function Projects({ lang }) {
    const [selected, setSelected] = useState(null)
    const t = translations[lang]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="projects"
            ref={ref}
            style={{
                padding: '120px 32px',
                background: 'var(--md-background)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '900px', width: '100%' }}>

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.2, 0, 0, 1.0] }}
                    style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontWeight: 800,
                        color: 'var(--md-on-surface)',
                        marginBottom: '8px',
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
                        marginBottom: '48px',
                        fontSize: '1rem',
                    }}
                >
                    {t.subtitle}
                </motion.p>

                {/* Project Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '20px',
                }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0, 0, 1.0] }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelected(project)}
                            style={{
                                padding: '28px',
                                borderRadius: '24px',
                                background: 'var(--md-surface)',
                                border: '1px solid var(--md-outline-variant)',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.2, 0, 0, 1.0)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(103,80,164,0.12)'
                                e.currentTarget.style.borderColor = 'var(--md-primary)'
                                e.currentTarget.style.background = 'var(--md-surface-variant)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = 'none'
                                e.currentTarget.style.borderColor = 'var(--md-outline-variant)'
                                e.currentTarget.style.background = 'var(--md-surface)'
                            }}
                        >
                            <p style={{ fontSize: '2rem', marginBottom: '16px' }}>{project.icon}</p>
                            <h3 style={{
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: 'var(--md-on-surface)',
                                marginBottom: '6px',
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                fontSize: '0.8rem',
                                color: 'var(--md-primary)',
                                fontWeight: 600,
                                marginBottom: '16px',
                            }}>
                                {project.category}
                            </p>
                            <p style={{
                                fontSize: '0.875rem',
                                color: 'var(--md-on-surface-variant)',
                                lineHeight: 1.6,
                            }}>
                                {lang === 'tr' ? project.descTr.slice(0, 80) + '...' : project.descEn.slice(0, 80) + '...'}
                            </p>

                            {/* Read more chip */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    marginTop: '20px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '6px 14px',
                                    borderRadius: '8px',
                                    background: 'var(--md-primary-container)',
                                    color: 'var(--md-on-primary-container)',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                }}
                            >
                                {lang === 'tr' ? 'Detaylar' : 'Details'} →
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <ProjectModal
                    project={selected}
                    onClose={() => setSelected(null)}
                    lang={lang}
                />
            )}
        </section>
    )
}