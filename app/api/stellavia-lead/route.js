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
    const visitDate = body.visitDate?.trim() || '';
    const message = body.message?.trim() || '';
    const type = body.type?.trim() || 'Website Inquiry';

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'Name, phone and email are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Stellavia Website" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Stellavia ${type} - ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f7efe3;padding:24px;">
          <div style="max-width:620px;margin:auto;background:#ffffff;border:1px solid #e2c98d;padding:28px;">
            <h2 style="margin:0 0 18px;color:#071a2b;">
              New Stellavia ${escapeHtml(type)}
            </h2>

            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>

            ${
              visitDate
                ? `<p><strong>Preferred Visit Date:</strong> ${escapeHtml(visitDate)}</p>`
                : ''
            }

            ${
              message
                ? `<p><strong>Message:</strong> ${escapeHtml(message)}</p>`
                : ''
            }

            <p style="font-size:13px;color:#777;margin-top:20px;">
              Source: Stellavia Website
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully.',
    });
  } catch (error) {
    console.error('Stellavia lead form error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Email sending failed. Please check SMTP settings.',
      },
      { status: 500 }
    );
  }
}
