'use server'

import { Resend } from 'resend'

const PROJECT_TYPE_LABELS = {
  'small-business-website': 'Small Business Website',
  'custom-web-app': 'Custom Web Application',
  'backend-api': 'Backend / API',
  'mobile-app': 'Mobile App',
  'not-sure': 'Not Sure Yet',
}

const BUDGET_LABELS = {
  'under-500': 'Under $500',
  '500-1000': '$500 – $1,000',
  '1000-3000': '$1,000 – $3,000',
  '3000-5000': '$3,000 – $5,000',
  '5000-plus': '$5,000+',
  'not-sure': 'Not Sure Yet',
}

export async function submitQuote(formData) {
  const name = formData.get('full-name')
  const email = formData.get('email')
  const phone = formData.get('phone') || 'Not provided'
  const projectType = PROJECT_TYPE_LABELS[formData.get('project-type')] || formData.get('project-type')
  const budget = BUDGET_LABELS[formData.get('budget')] || formData.get('budget')
  const description = formData.get('description')

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Copper Stag Website <noreply@copperstag.dev>',
      to: process.env.RESEND_TO_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #B87333; padding: 24px 32px;">
            <h1 style="margin: 0; color: #0D0D0D; font-size: 20px; font-weight: 600; letter-spacing: 0.06em;">
              New Quote Request
            </h1>
          </div>
          <div style="background: #f9f9f9; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; width: 40%; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; vertical-align: top;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; vertical-align: top;">Project Type</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; vertical-align: top;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 600; vertical-align: top;">Description</td>
                <td style="padding: 12px 0; white-space: pre-wrap;">${description}</td>
              </tr>
            </table>
          </div>
          <div style="background: #e8e8e8; padding: 16px 32px; font-size: 12px; color: #666;">
            Sent from copperstag.dev contact form
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { error: 'Something went wrong. Please email me directly at hello@copperstag.dev.' }
  }
}
