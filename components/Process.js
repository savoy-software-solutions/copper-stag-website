'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We talk through what you need — no charge, no commitment. I ask the right questions to scope the project accurately.',
  },
  {
    number: '02',
    title: 'Proposal & Scope',
    description:
      'You receive a flat-rate proposal with a clear scope, timeline, and deliverables. No vague estimates. No hourly billing surprises.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I build it. You get regular updates and can provide feedback throughout. No handoffs to a team you&apos;ve never met.',
  },
  {
    number: '04',
    title: 'Delivery & Handoff',
    description:
      'Your site or app is deployed, tested, and handed off with full documentation. You own everything — code, domain, hosting.',
  },
]

export default function Process() {
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
      id="process"
      ref={ref}
      style={{
        background: 'var(--charcoal)',
        padding: '120px 0',
        borderTop: '1px solid var(--iron)',
        borderBottom: '1px solid var(--iron)',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
        <div className="section-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">The Process</h2>
          <p className="section-subtitle">
            Simple, transparent, and predictable — from the first conversation to launch day.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
        }} className="process-grid">
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                padding: '0 32px 0 0',
                position: 'relative',
              }}
              className="process-step"
            >
              {/* Connector line (between steps on desktop) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '-1px',
                    width: '100%',
                    height: '1px',
                    background: 'var(--iron)',
                    zIndex: 0,
                  }}
                  className="process-connector"
                />
              )}

              {/* Step Number */}
              <div style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: '48px',
                fontWeight: 300,
                color: 'var(--iron)',
                lineHeight: 1,
                marginBottom: '24px',
                position: 'relative',
                zIndex: 1,
                display: 'inline-block',
                background: 'var(--charcoal)',
                paddingRight: '16px',
              }}>
                {step.number}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--white)',
                marginBottom: '14px',
              }}>
                {step.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '13px',
                fontWeight: 300,
                color: 'var(--smoke)',
                lineHeight: 1.75,
              }}>
                {step.description.replace(/&apos;/g, "'")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .process-step {
            padding: 0 !important;
            border-left: 2px solid var(--iron);
            padding-left: 24px !important;
          }
          .process-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
