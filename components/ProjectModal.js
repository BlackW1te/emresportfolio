'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose, lang }) {
    if (!project) return null

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    backdropFilter: 'blur(4px)',
                }}
            >
                {/* Modal Container - M3 Container Transform */}
                <motion.div
                    layoutId={`project-${project.id}`}
                    initial={{ opacity: 0, scale: 0.8, borderRadius: '28px' }}
                    animate={{ opacity: 1, scale: 1, borderRadius: '28px' }}
                    exit={{ opacity: 0, scale: 0.8, borderRadius: '28px' }}
                    transition={{ duration: 0.4, ease: [0.2, 0, 0, 1.0] }}
                    onClick={e => e.stopPropagation()}
                    style={{
                        background: 'var(--md-surface)',
                        borderRadius: '28px',
                        maxWidth: '560px',
                        width: '100%',
                        overflow: 'hidden',
                        boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
                    }}
                >
                    {/* Header */}
                    <div style={{
                        padding: '32px 32px 24px',
                        background: 'var(--md-primary-container)',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <p style={{
                                    fontSize: '2rem',
                                    marginBottom: '8px',
                                }}>
                                    {project.icon}
                                </p>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: 'var(--md-on-primary-container)',
                                    marginBottom: '4px',
                                }}>
                                    {project.title}
                                </h2>
                                <p style={{
                                    color: 'var(--md-primary)',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                }}>
                                    {project.category}
                                </p>
                            </div>

                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: 'var(--md-primary)',
                                    color: 'var(--md-on-primary)',
                                    cursor: 'pointer',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                ✕
                            </motion.button>
                        </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: '24px 32px 32px' }}>
                        <p style={{
                            color: 'var(--md-on-surface-variant)',
                            lineHeight: 1.8,
                            marginBottom: '24px',
                            fontSize: '0.95rem',
                        }}>
                            {lang === 'tr' ? project.descTr : project.descEn}
                        </p>

                        {/* Tech Stack */}
                        <div style={{ marginBottom: '28px' }}>
                            <p style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: 'var(--md-primary)',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                marginBottom: '12px',
                            }}>
                                Tech Stack
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {project.tech.map((t, i) => (
                                    <motion.span
                                        key={t}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05, ease: [0.34, 1.56, 0.64, 1] }}
                                        style={{
                                            padding: '6px 14px',
                                            borderRadius: '8px',
                                            background: 'var(--md-secondary-container)',
                                            color: 'var(--md-on-secondary-container)',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {t}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {project.github && (
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        padding: '12px 24px',
                                        borderRadius: '16px',
                                        background: 'var(--md-primary)',
                                        color: 'var(--md-on-primary)',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    GitHub →
                                </motion.a>
                            )}
                            {project.live && (
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        padding: '12px 24px',
                                        borderRadius: '16px',
                                        border: '1px solid var(--md-outline)',
                                        background: 'transparent',
                                        color: 'var(--md-on-surface)',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    Live →
                                </motion.a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}