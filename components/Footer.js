'use client'

import Image from 'next/image'

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Process', href: '#process' },
    { label: 'Get a Quote', href: '#contact' },
  ]

  return (
    <footer>
      {/* Row 1 */}
      <div style={{
        background: 'var(--charcoal)',
        borderTop: '1px solid var(--iron)',
      }}>
        <div style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '48px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '32px',
        }}>
          {/* Left: Logo + Name + Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Image
              src="/stag-mark.png"
              alt="Copper Stag mark"
              width={48}
              height={48}
              style={{ objectFit: 'contain' }}
            />
            <div>
              <div style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: '20px',
                fontWeight: 500,
                color: 'var(--white)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}>
                Copper Stag
              </div>
              <div style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '9px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--copper)',
                marginTop: '4px',
              }}>
                Software Development
              </div>
            </div>
          </div>

          {/* Right: Nav Links + domain */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--smoke)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--cream)'}
                onMouseLeave={e => e.target.style.color = 'var(--smoke)'}
              >
                {link.label}
              </a>
            ))}
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '11px',
              fontWeight: 300,
              color: 'var(--ash)',
              letterSpacing: '0.06em',
            }}>
              copperstag.dev
            </span>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div style={{
        background: 'var(--black)',
        borderTop: '1px solid var(--iron)',
      }}>
        <div style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            fontWeight: 300,
            color: 'var(--ash)',
          }}>
            &copy; 2025 Copper Stag LLC. All rights reserved.
          </span>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '11px',
            fontWeight: 300,
            color: 'var(--ash)',
          }}>
            Veteran-Owned &nbsp;·&nbsp; Statesville &amp; Charlotte, NC
          </span>
        </div>
      </div>
    </footer>
  )
}
