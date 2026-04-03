'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { submitQuote } from '@/app/actions/submitQuote'

const inputStyle = {
  width: '100%',
  background: 'var(--charcoal)',
  border: '1px solid var(--iron)',
  color: 'var(--cream)',
  padding: '14px 16px',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '14px',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.2s',
  appearance: 'none',
  WebkitAppearance: 'none',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--ash)',
  marginBottom: '6px',
}

function FormField({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [focusedField, setFocusedField] = useState(null)
  const [isPending, startTransition] = useTransition()

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    setError(null)
    startTransition(async () => {
      const result = await submitQuote(data)
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error)
      }
    })
  }

  const getInputStyle = (fieldName) => ({
    ...inputStyle,
    borderColor: focusedField === fieldName ? 'var(--copper)' : 'var(--iron)',
  })

  const trustSignals = [
    '$0 Consultation Fee',
    'Flat-Rate Pricing',
    'Veteran-Owned & Operated',
  ]

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: 'var(--black)',
        padding: '120px 0',
        borderTop: '1px solid var(--iron)',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
        <div className="section-header">
          <div className="section-label">Get a Free Quote</div>
          <h2 className="section-title">Let&apos;s Talk</h2>
          <p className="section-subtitle">
            Tell me about your project and I&apos;ll get back to you within one business day with a flat-rate proposal.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '80px',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left Column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--white)',
              letterSpacing: '0.06em',
              marginBottom: '24px',
            }}>
              What happens next:
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              marginBottom: '48px',
            }}>
              {[
                'I review your project details',
                'You hear back within 1 business day',
                'We schedule a free consultation',
                'You get a flat-rate proposal',
              ].map((item) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'var(--smoke)',
                  lineHeight: 1.6,
                }}>
                  <span style={{ color: 'var(--copper)', fontWeight: 500, flexShrink: 0 }}>→</span>
                  {item}
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingTop: '32px',
              borderTop: '1px solid var(--iron)',
            }}>
              {trustSignals.map((signal) => (
                <div key={signal} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <span style={{
                    display: 'block',
                    width: '6px',
                    height: '6px',
                    background: 'var(--copper)',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--ash)',
                  }}>
                    {signal}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Form */}
          <div>
            {submitted ? (
              <div style={{
                padding: '60px 40px',
                background: 'var(--charcoal)',
                border: '1px solid var(--iron)',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: 'var(--font-editorial), serif',
                  fontSize: '22px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--cream)',
                  lineHeight: 1.6,
                }}>
                  Got it — I&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                  <FormField label="Full Name">
                    <input
                      type="text"
                      name="full-name"
                      required
                      placeholder="Jane Smith"
                      style={getInputStyle('name')}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </FormField>
                  <FormField label="Email Address">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      style={getInputStyle('email')}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </FormField>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                  <FormField label="Phone Number (Optional)">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(704) 555-0100"
                      style={getInputStyle('phone')}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </FormField>
                  <FormField label="Project Type">
                    <select
                      name="project-type"
                      required
                      style={{ ...getInputStyle('project-type'), cursor: 'pointer' }}
                      onFocus={() => setFocusedField('project-type')}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">Select...</option>
                      <option value="small-business-website">Small Business Website</option>
                      <option value="custom-web-app">Custom Web Application</option>
                      <option value="backend-api">Backend / API</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Estimated Budget">
                  <select
                    name="budget"
                    required
                    style={{ ...getInputStyle('budget'), cursor: 'pointer' }}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="">Select...</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 – $1,000</option>
                    <option value="1000-3000">$1,000 – $3,000</option>
                    <option value="3000-5000">$3,000 – $5,000</option>
                    <option value="5000-plus">$5,000+</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </FormField>

                <FormField label="Project Description">
                  <textarea
                    name="description"
                    required
                    rows={5}
                    placeholder="Tell me about your business and what you're looking to build..."
                    style={{
                      ...getInputStyle('description'),
                      resize: 'vertical',
                      minHeight: '120px',
                    }}
                    onFocus={() => setFocusedField('description')}
                    onBlur={() => setFocusedField(null)}
                  />
                </FormField>

                {error && (
                  <p style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#c0392b',
                    margin: 0,
                    padding: '12px 16px',
                    background: 'rgba(192,57,43,0.08)',
                    border: '1px solid rgba(192,57,43,0.3)',
                  }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '11px', opacity: isPending ? 0.6 : 1, cursor: isPending ? 'not-allowed' : 'pointer' }}
                >
                  {isPending ? 'Sending…' : 'Send My Project Details'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        select option {
          background: var(--charcoal);
          color: var(--cream);
        }
        input::placeholder,
        textarea::placeholder {
          color: var(--ash);
        }
      `}</style>
    </section>
  )
}
