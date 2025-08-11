import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@greekwave.tech',
      to: process.env.CONTACT_EMAIL || 'hello@greekwave.tech',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A2540; border-bottom: 2px solid #00FFFF; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0A2540; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0A2540; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
            <p>This message was sent from the GreekWave Technologies contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.SMTP_FROM || 'noreply@greekwave.tech',
      to: email,
      subject: 'Thank you for contacting GreekWave Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #0A2540, #1e3a5f);">
            <h1 style="color: #00FFFF; margin: 0;">GreekWave Technologies</h1>
            <p style="color: #C0C0C0; margin: 10px 0 0 0;">Riding the Wave of AI Innovation</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #0A2540;">Thank you for reaching out!</h2>
            
            <p>Dear ${name},</p>
            
            <p>Thank you for your interest in GreekWave Technologies. We have received your message and will get back to you within 24 hours.</p>
            
            <p>In the meantime, feel free to explore our:</p>
            <ul>
              <li><a href="${process.env.NEXT_PUBLIC_SITE_URL}/services" style="color: #00FFFF;">AI Services & Solutions</a></li>
              <li><a href="${process.env.NEXT_PUBLIC_SITE_URL}/case-studies" style="color: #00FFFF;">Case Studies</a></li>
              <li><a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog" style="color: #00FFFF;">AI Insights Blog</a></li>
            </ul>
            
            <p>Best regards,<br>The GreekWave Technologies Team</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              GreekWave Technologies | 123 Innovation Drive, San Francisco, CA 94105<br>
              <a href="mailto:hello@greekwave.tech" style="color: #00FFFF;">hello@greekwave.tech</a> | 
              <a href="tel:+1-555-0123" style="color: #00FFFF;">+1 (555) 012-3456</a>
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}