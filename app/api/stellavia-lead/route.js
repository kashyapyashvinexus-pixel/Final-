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
    const type = body.type?.trim() || 'Website Lead';

    if (!name || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, WhatsApp number and email are required.'
        },
        { status: 400 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT || 465);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const receiverEmail =
      process.env.LEAD_RECEIVER_EMAIL || process.env.SMTP_USER;

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeType = escapeHtml(type);
    const whatsappNumberOnly = safePhone.replace(/\D/g, '');

    await transporter.sendMail({
      from: `"Stellavia Website" <${process.env.SMTP_USER}>`,
      to: receiverEmail,
      subject: `New Stellavia Lead - ${safeType}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:24px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #e8e8e8;">
            
            <div style="background:#10243A; color:#ffffff; padding:22px 26px;">
              <h2 style="margin:0; font-size:22px;">New Stellavia Lead</h2>
              <p style="margin:8px 0 0; color:#d7c28d;">${safeType}</p>
            </div>

            <div style="padding:26px;">
              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:12px; font-weight:bold; color:#10243A; border-bottom:1px solid #eee;">Name</td>
                  <td style="padding:12px; color:#333; border-bottom:1px solid #eee;">${safeName}</td>
                </tr>

                <tr>
                  <td style="padding:12px; font-weight:bold; color:#10243A; border-bottom:1px solid #eee;">WhatsApp Number</td>
                  <td style="padding:12px; color:#333; border-bottom:1px solid #eee;">
                    <a href="https://wa.me/${whatsappNumberOnly}" style="color:#10243A; font-weight:bold;">
                      ${safePhone}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px; font-weight:bold; color:#10243A; border-bottom:1px solid #eee;">Email</td>
                  <td style="padding:12px; color:#333; border-bottom:1px solid #eee;">
                    <a href="mailto:${safeEmail}" style="color:#10243A; font-weight:bold;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px; font-weight:bold; color:#10243A;">Lead Type</td>
                  <td style="padding:12px; color:#333;">${safeType}</td>
                </tr>
              </table>

              <div style="margin-top:24px;">
                <a href="https://wa.me/${whatsappNumberOnly}" 
                   style="display:inline-block; background:#25D366; color:#ffffff; text-decoration:none; padding:13px 20px; border-radius:999px; font-weight:bold;">
                  Message User on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      `
    });

    return NextResponse.json({
      success: true,
      message: 'Lead sent successfully.'
    });
  } catch (error) {
    console.error('Stellavia lead error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Email could not be sent. Please try again.'
      },
      { status: 500 }
    );
  }
}
