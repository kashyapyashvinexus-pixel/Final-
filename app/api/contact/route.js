import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'Name, phone and email are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Stellavia Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || 'infinitystellavia99@gmail.com',
      replyTo: email,
      subject: 'New Enquiry From Stellavia Website',
      html: `
        <div style="font-family: Arial, sans-serif; background:#f8f4ec; padding:24px;">
          <div style="max-width:650px; margin:auto; background:#ffffff; padding:28px; border-radius:16px; border:1px solid #e5dac8;">
            <h2 style="margin:0 0 18px; color:#1d1d1d;">New Site Visit Enquiry</h2>

            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0; font-weight:bold;">Full Name:</td>
                <td style="padding:10px 0;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; font-weight:bold;">Phone Number:</td>
                <td style="padding:10px 0;">${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; font-weight:bold;">Email Address:</td>
                <td style="padding:10px 0;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; font-weight:bold;">Interested In:</td>
                <td style="padding:10px 0;">3BHK Apartment</td>
              </tr>
              <tr>
                <td style="padding:10px 0; font-weight:bold;">Budget Range:</td>
                <td style="padding:10px 0;">₹50L - ₹1.00CR</td>
              </tr>
              <tr>
                <td style="padding:10px 0; font-weight:bold;">Message:</td>
                <td style="padding:10px 0;">${escapeHtml(message || 'No message')}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Enquiry sent successfully.',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { success: false, message: 'Failed to send enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
