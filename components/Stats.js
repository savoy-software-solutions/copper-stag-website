'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { number: '14', label: 'Years U.S. Army' },
  { number: '$0', label: 'Consultation Fee' },
  { number: '100%', label: 'Flat-Rate Pricing' },
  { number: 'NC', label: 'Local & Remote' },
]

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('section-hidden')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-visible')
          el.classList.remove('section-hidden')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="stats"
      ref={ref}
      style={{
        background: 'var(--charcoal)',
        borderTop: '1px solid var(--iron)',
        borderBottom: '1px solid var(--iron)',
      }}
    >
      <div style={{
        maxWidth: '1160px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }} className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: '40px 24px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid var(--iron)' : 'none',
            }}
            className="stat-item"
          >
            <div style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: '48px',
              fontWeight: 500,
              color: 'var(--white)',
              lineHeight: 1,
              marginBottom: '10px',
            }}>
              {stat.number}
            </div>
            <div style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--copper)',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 0;
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid var(--iron) !important;
          }
          .stat-item:nth-child(even) {
            border-right: none !important;
          }
          .stat-item:nth-child(1),
          .stat-item:nth-child(2) {
            border-bottom: 1px solid var(--iron);
          }
        }
      `}</style>
    </section>
  )
}
