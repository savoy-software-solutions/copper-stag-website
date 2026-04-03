'use client'

import { useEffect, useRef } from 'react'

const packages = [
  {
    name: 'Starter',
    price: '$250',
    priceSub: 'one-time',
    popular: false,
    features: [
      'Up to 3 pages',
      'Mobile responsive',
      'Contact form',
      'Deployed & live',
      '7-day delivery',
    ],
  },
  {
    name: 'Business',
    price: '$550',
    priceSub: 'one-time',
    popular: true,
    features: [
      'Up to 7 pages',
      'Custom design',
      'Basic SEO setup',
      'Google Maps & social links',
      '2 rounds of revisions',
      '14-day delivery',
    ],
  },
  {
    name: 'Pro',
    price: '$1,100+',
    priceSub: 'one-time',
    popular: false,
    features: [
      'Custom React build',
      'Backend & database',
      'Auth or payments',
      'API integrations',
      'Ongoing support available',
    ],
  },
]

function PackageCard({ pkg }) {
  return (
    <div
      style={{
        background: pkg.popular ? 'var(--iron)' : 'var(--charcoal)',
        border: '1px solid var(--iron)',
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        flex: 1,
      }}
      className={pkg.popular ? 'package-popular' : ''}
    >
      {pkg.popular && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'var(--copper)',
          color: 'var(--black)',
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '8px',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '5px 10px',
        }}>
          Most Popular
        </div>
      )}

      <h3 style={{
        fontFamily: 'var(--font-display), serif',
        fontSize: '22px',
        fontWeight: 500,
        color: 'var(--white)',
        marginBottom: '24px',
        letterSpacing: '0.08em',
      }}>
        {pkg.name}
      </h3>

      <div style={{ marginBottom: '32px' }}>
        <span style={{
          fontFamily: 'var(--font-display), serif',
          fontSize: '36px',
          fontWeight: 500,
          color: 'var(--white)',
          lineHeight: 1,
        }}>
          {pkg.price}
        </span>
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '11px',
          fontWeight: 300,
          color: 'var(--ash)',
          marginLeft: '8px',
        }}>
          {pkg.priceSub}
        </span>
      </div>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginBottom: '36px',
        flex: 1,
      }}>
        {pkg.features.map((feature) => (
          <li key={feature} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: '13px',
            fontWeight: 300,
            color: 'var(--smoke)',
            lineHeight: 1.5,
          }}>
            <span style={{ color: 'var(--copper)', flexShrink: 0, marginTop: '1px' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          display: 'block',
          padding: '13px 32px',
          background: 'transparent',
          color: 'var(--cream)',
          border: '1px solid var(--steel)',
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          textAlign: 'center',
          textDecoration: 'none',
          transition: 'border-color 0.2s, color 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--copper)'; e.currentTarget.style.color = 'var(--copper)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--steel)'; e.currentTarget.style.color = 'var(--cream)' }}
      >
        Get Started
      </a>
    </div>
  )
}

export default function Packages() {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Reorder for mobile: most popular first
  const mobileOrder = [...packages].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))

  return (
    <section
      id="packages"
      ref={ref}
      style={{
        background: 'var(--black)',
        padding: '120px 0',
        borderTop: '1px solid var(--iron)',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
        <div className="section-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Website Packages</h2>
          <p className="section-subtitle">
            Flat-rate pricing — you know exactly what you&apos;re paying before we start. No hourly billing, no surprise invoices.
          </p>
        </div>

        {/* Desktop grid */}
        <div style={{
          display: 'flex',
          gap: '0',
          alignItems: 'stretch',
        }} className="packages-grid-desktop">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* Mobile grid */}
        <div style={{ display: 'none' }} className="packages-grid-mobile">
          {mobileOrder.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .packages-grid-desktop { display: none !important; }
          .packages-grid-mobile {
            display: flex !important;
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  )
}
