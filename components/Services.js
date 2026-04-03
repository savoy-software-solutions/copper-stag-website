'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Small Business Websites',
    description:
      'Clean, mobile-ready sites that represent your business professionally. Built custom — not dropped into a Wix template.',
    price: 'Starting at $250',
  },
  {
    title: 'Custom React Websites',
    description:
      'Fast, modern web apps for businesses that need more than a brochure — forms, dashboards, user accounts, and more.',
    price: 'Starting at $500',
  },
  {
    title: 'Backend & APIs',
    description:
      'Spring Boot or Node.js backends, REST APIs, database design, and third-party integrations like payments or maps.',
    price: 'Starting at $350',
  },
  {
    title: 'Mobile Apps',
    description:
      'Cross-platform iOS & Android apps using React Native. Built for real-world business use — not just a demo that looks good.',
    price: 'Starting at $900',
  },
]

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#1F1F1F' : 'var(--charcoal)',
        borderTop: `2px solid ${hovered ? 'var(--ember)' : 'var(--copper)'}`,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.2s, border-color 0.2s',
        minHeight: '280px',
        cursor: 'default',
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display), serif',
        fontSize: '18px',
        fontWeight: 500,
        color: 'var(--white)',
        marginBottom: '16px',
      }}>
        {service.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontSize: '13px',
        fontWeight: 300,
        color: 'var(--smoke)',
        lineHeight: 1.75,
        flex: 1,
      }}>
        {service.description}
      </p>
      <div style={{
        fontFamily: 'var(--font-editorial), serif',
        fontSize: '22px',
        fontWeight: 500,
        color: 'var(--copper)',
        marginTop: '24px',
      }}>
        {service.price}
      </div>
    </div>
  )
}

export default function Services() {
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

  return (
    <section
      id="services"
      ref={ref}
      style={{
        background: 'var(--black)',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
        <div className="section-header">
          <div className="section-label">What We Build</div>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            From a simple 3-page site to a full-stack app with a database — built to fit your budget and your business.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          border: '1px solid var(--iron)',
          gap: '1px',
          background: 'var(--iron)',
        }} className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
