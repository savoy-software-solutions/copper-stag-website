'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Process', href: '#process' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'var(--black)',
        borderBottom: '1px solid var(--iron)',
        height: scrolled ? '64px' : '72px',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.6)' : 'none',
        transition: 'height 0.2s ease, box-shadow 0.2s ease',
      }}>
        <div style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 40px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <Image src="/stag-mark.png" alt="Copper Stag mark" width={36} height={36} style={{ objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: '17px',
              fontWeight: 500,
              color: 'var(--white)',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}>
              Copper Stag
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
          }} className="nav-links-desktop">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--smoke)',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                onMouseLeave={e => e.target.style.color = 'var(--smoke)'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#contact" className="btn-primary nav-cta" style={{ textDecoration: 'none' }}>
              Get a Free Quote
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--white)', transition: 'all 0.2s' }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--white)', transition: 'all 0.2s' }} />
              <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--white)', transition: 'all 0.2s' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
        }}>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--smoke)',
              fontSize: '28px',
              lineHeight: 1,
            }}
          >
            ×
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn-primary" style={{ textDecoration: 'none', marginTop: '8px' }}>
            Get a Free Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 768px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}
