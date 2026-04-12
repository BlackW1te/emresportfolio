'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const translations = {
    tr: {
        title: 'İletişim',
        subtitle: 'Bir proje fikrin mi var? Ya da sadece merhaba demek istersen...',
        name: 'İsim',
        email: 'E-posta',
        message: 'Mesajınız',
        send: 'Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız iletildi! En kısa sürede döneceğim.',
        error: 'Lütfen tüm alanları doldurun.',
        linksTitle: 'Diğer Kanallar',
        emailLabel: 'Mail Gönder',
        linkedin: 'LinkedIn',
        github: 'GitHub',
    },
    en: {
        title: 'Contact',
        subtitle: 'Have a project in mind? Or just want to say hi...',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent! I will get back to you soon.',
        error: 'Please fill in all fields.',
        linksTitle: 'Other Channels',
        emailLabel: 'Send Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
    },
}

const links = [
    {
        key: 'emailLabel',
        icon: '✉️',
        href: 'mailto:emre@example.com',
        bg: 'var(--md-primary-container)',
        fgColor: 'var(--md-on-primary-container)',
    },
    {
        key: 'linkedin',
        icon: '💼',
        href: 'https://linkedin.com',
        bg: 'var(--md-secondary-container)',
        fgColor: 'var(--md-on-secondary-container)',
    },
    {
        key: 'github',
        icon: '🐙',
        href: 'https://github.com',
        bg: 'var(--md-surface-variant)',
        fgColor: 'var(--md-on-surface-variant)',
    },
]

export default function Contact({ lang }) {
    const t = translations[lang]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [status, setStatus] = useState('idle') // idle, sending, success
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) {
            alert(t.error)
            return
        }

        setStatus('sending')
        // Simulate API call
        await new Promise(r => setTimeout(r, 1500))
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
    }

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
            <div style={{ maxWidth: '900px', width: '100%' }}>
                <style jsx>{`
                    .contact-container {
                        display: grid;
                        grid-template-columns: 1.2fr 1fr;
                        gap: 64px;
                    }
                    input, textarea {
                        width: 100%;
                        padding: 16px;
                        border-radius: 12px;
                        border: 1px solid var(--md-outline-variant);
                        background: var(--md-surface);
                        color: var(--md-on-surface);
                        font-family: inherit;
                        font-size: 1rem;
                        transition: border-color 0.2s, box-shadow 0.2s;
                    }
                    input:focus, textarea:focus {
                        outline: none;
                        border-color: var(--md-primary);
                        box-shadow: 0 0 0 2px var(--md-primary-container);
                    }
                    @media (max-width: 850px) {
                        .contact-container {
                            grid-template-columns: 1fr;
                            gap: 48px;
                        }
                    }
                `}</style>

                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
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
                        transition={{ delay: 0.1 }}
                        style={{
                            color: 'var(--md-on-surface-variant)',
                            fontSize: '1.1rem',
                        }}
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                <div className="contact-container">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <input
                                    type="text"
                                    placeholder={t.name}
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder={t.email}
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <textarea
                                rows={5}
                                placeholder={t.message}
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'sending'}
                                style={{
                                    padding: '16px 32px',
                                    borderRadius: '100px',
                                    background: 'var(--md-primary)',
                                    color: 'var(--md-on-primary)',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    opacity: status === 'sending' ? 0.7 : 1,
                                }}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <span className="spinner" />
                                        {t.sending}
                                    </>
                                ) : t.send}
                            </motion.button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, h: 0 }}
                                        animate={{ opacity: 1, h: 'auto' }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            color: '#22c55e',
                                            fontWeight: 600,
                                            fontSize: '0.9rem',
                                            textAlign: 'center'
                                        }}
                                    >
                                        ✓ {t.success}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Contact Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: 'var(--md-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '24px'
                        }}>
                            {t.linksTitle}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {links.map((link) => (
                                <motion.a
                                    key={link.key}
                                    href={link.href}
                                    target={link.key !== 'emailLabel' ? '_blank' : undefined}
                                    whileHover={{ x: 8 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '16px 20px',
                                        borderRadius: '16px',
                                        background: link.bg,
                                        color: link.fgColor,
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        border: '1px solid var(--md-outline-variant)',
                                    }}
                                >
                                    <span>{link.icon}</span>
                                    {t[link.key]}
                                    <span style={{ marginLeft: 'auto', opacity: 0.5 }}>→</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    style={{
                        marginTop: '80px',
                        textAlign: 'center',
                        color: 'var(--md-on-surface-variant)',
                        fontSize: '0.85rem',
                        opacity: 0.6,
                    }}
                >
                    © 2025 Fatih Emre İşgören · Made with Next.js & Framer Motion
                </motion.p>
            </div>
        </section>
    )
}


