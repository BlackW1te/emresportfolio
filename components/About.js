'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const translations = {
    tr: {
        title: 'Hakkımda',
        bio: 'Bilgisayar Mühendisliği öğrencisiyim ve mobil uygulama geliştirme üzerine yoğunlaşıyorum. Flutter ile kullanıcı odaklı, performanslı ve estetik uygulamalar geliştiriyorum.',
        bio2: 'Sistem mimarisi, temiz kod ve kullanıcı deneyimi konularında kendimi sürekli geliştiriyorum. Firebase, animasyon sistemleri ve ses entegrasyonu gibi alanlarda aktif projelerim var.',
        education: 'Eğitim',
        eduDetail: 'Bilgisayar Mühendisliği',
        focus: 'Odak Alanları',
    },
    en: {
        title: 'About Me',
        bio: "I'm a Computer Engineering student focused on mobile app development. I build user-centered, performant, and aesthetic applications with Flutter.",
        bio2: 'I continuously improve myself in system architecture, clean code, and user experience. I have active projects in Firebase, animation systems, and audio integration.',
        education: 'Education',
        eduDetail: 'Computer Engineering',
        focus: 'Focus Areas',
    },
}

const focusAreas = {
    tr: ['Mobil Geliştirme', 'UI/UX Tasarım', 'Firebase', 'Animasyon Sistemleri', 'Ses Entegrasyonu', 'Temiz Mimari'],
    en: ['Mobile Development', 'UI/UX Design', 'Firebase', 'Animation Systems', 'Audio Integration', 'Clean Architecture'],
}

export default function About({ lang }) {
    const t = translations[lang]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="about"
            ref={ref}
            style={{
                padding: '120px 32px',
                background: 'var(--md-surface)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '800px', width: '100%' }}>

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.2, 0, 0, 1.0] }}
                    style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontWeight: 800,
                        color: 'var(--md-on-surface)',
                        marginBottom: '48px',
                    }}
                >
                    {t.title}
                    <span style={{ color: 'var(--md-primary)' }}>.</span>
                </motion.h2>

                <div 
                    className="about-grid"
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '48px' 
                    }}
                >
                    <style jsx>{`
                        @media (max-width: 768px) {
                            .about-grid {
                                grid-template-columns: 1fr !important;
                                gap: 32px !important;
                            }
                        }
                    `}</style>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1.0] }}
                    >
                        <p style={{
                            color: 'var(--md-on-surface-variant)',
                            lineHeight: 1.8,
                            marginBottom: '16px',
                            fontSize: '1rem',
                        }}>
                            {t.bio}
                        </p>
                        <p style={{
                            color: 'var(--md-on-surface-variant)',
                            lineHeight: 1.8,
                            fontSize: '1rem',
                        }}>
                            {t.bio2}
                        </p>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{
                                marginTop: '32px',
                                padding: '20px',
                                borderRadius: '16px',
                                background: 'var(--md-primary-container)',
                                border: '1px solid var(--md-outline-variant)',
                            }}
                        >
                            <p style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: 'var(--md-primary)',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                marginBottom: '6px',
                            }}>
                                {t.education}
                            </p>
                            <p style={{
                                fontWeight: 700,
                                color: 'var(--md-on-primary-container)',
                                fontSize: '1rem',
                            }}>
                                {t.eduDetail}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Focus Areas */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1.0] }}
                    >
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: 'var(--md-primary)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}>
                            {t.focus}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {focusAreas[lang].map((area, i) => (
                                <motion.span
                                    key={area}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '10px',
                                        background: 'var(--md-secondary-container)',
                                        color: 'var(--md-on-secondary-container)',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        cursor: 'default',
                                    }}
                                >
                                    {area}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}