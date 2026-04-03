'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '72px',
      }}
    >
      <div style={{
        maxWidth: '1160px',
        margin: '0 auto',
        padding: '0 40px',
        width: '100%',
      }}>
        {/* Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '32px',
        }}>
          <span style={{
            display: 'block',
            width: '24px',
            height: '1px',
            background: 'var(--copper)',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--copper)',
          }}>
            Charlotte &amp; Statesville, NC &nbsp;·&nbsp; Veteran-Owned
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline" style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 500,
          color: 'var(--white)',
          lineHeight: 1.05,
          whiteSpace: 'pre-line',
        }}>
          {'Software Built\nFor You.'}
        </h1>

        {/* Sub-headline */}
        <p style={{
          fontFamily: 'var(--font-editorial), serif',
          fontSize: '20px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--smoke)',
          maxWidth: '560px',
          marginTop: '24px',
          lineHeight: 1.65,
        }}>
          Local web development and software services for small businesses.
          You talk to the developer directly — not a project manager at an agency.
        </p>

        {/* CTA Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          marginTop: '40px',
          alignItems: 'center',
        }}>
          <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            Get a Free Quote
          </a>
          <a href="#services" className="btn-secondary" style={{ textDecoration: 'none' }}>
            See What We Build
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: scrolled ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}>
        <div className="chevron-bounce" style={{ color: 'var(--copper)' }}>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L10 10L19 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        .hero-headline {
          font-size: 72px;
        }
        @media (max-width: 767px) {
          .hero-headline {
            font-size: 48px;
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .chevron-bounce {
          animation: bounce 1.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
