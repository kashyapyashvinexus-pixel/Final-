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
    const preferredDate = body.preferredDate?.trim();

    const formSource = body.formSource?.trim() || 'Website Contact Form';
    const project = body.project?.trim() || 'Stellavia';
    const location = body.location?.trim() || 'Khoraj, Gandhinagar';
    const interestedIn = body.interestedIn?.trim() || '3BHK Apartment';
    const budgetRange = body.budgetRange?.trim() || '₹85 Lacs* Onwards';

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'Name, phone and email are required.' },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, message: 'Email server is not configured.' },
        { status: 500 }
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
      subject: `New Enquiry - ${formSource}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f8f4ec; padding:24px;">
          <div style="max-width:680px; margin:auto; background:#ffffff; padding:28px; border-radius:16px; border:1px solid #e5dac8;">
            <h2 style="margin:0 0 18px; color:#1d1d1d;">New Stellavia Enquiry</h2>

            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0; font-weight:bold; width:190px;">Form Source:</td>
                <td style="padding:10px 0;">${escapeHtml(formSource)}</td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Project:</td>
                <td style="padding:10px 0;">${escapeHtml(project)}</td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Location:</td>
                <td style="padding:10px 0;">${escapeHtml(location)}</td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Full Name:</td>
                <td style="padding:10px 0;">${escapeHtml(name)}</td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Phone Number:</td>
                <td style="padding:10px 0;">
                  <a href="tel:${escapeHtml(phone)}" style="color:#1d1d1d; text-decoration:none;">
                    ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Email Address:</td>
                <td style="padding:10px 0;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#1d1d1d; text-decoration:none;">
                    ${escapeHtml(email)}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Interested In:</td>
                <td style="padding:10px 0;">${escapeHtml(interestedIn)}</td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Budget Range:</td>
                <td style="padding:10px 0;">${escapeHtml(budgetRange)}</td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Preferred Date:</td>
                <td style="padding:10px 0;">${escapeHtml(preferredDate || 'Not provided')}</td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Message:</td>
                <td style="padding:10px 0;">${escapeHtml(message || 'No message')}</td>
              </tr>
            </table>

            <div style="margin-top:22px; padding:16px; background:#f8f4ec; border-radius:12px;">
              <p style="margin:0; font-size:13px; color:#6b5b43;">
                This enquiry was submitted from the Stellavia website.
              </p>
            </div>
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
