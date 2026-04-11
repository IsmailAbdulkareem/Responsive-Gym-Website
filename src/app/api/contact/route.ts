import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
      return NextResponse.json(
        { success: false, error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Verify transporter
    await transporter.verify();

    // Email to gym owner
    const mailOptions = {
      from: `"GYM Fitness Hub Website" <${emailUser}>`,
      to: emailUser,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #FFC107; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background: #f9f9f9; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone || 'Not provided'}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px;">Message:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #FFC107; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #888; font-size: 12px;">Sent from GYM Fitness Hub Website Contact Form</p>
        </div>
      `,
      replyTo: email,
    };

    // Auto-reply to user
    const autoReplyOptions = {
      from: `"GYM Fitness Hub" <${emailUser}>`,
      to: email,
      subject: 'Thank you for contacting GYM Fitness Hub!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFC107;">Thank You, ${name}!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to GYM Fitness Hub. We have received your message and our team will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #FFC107;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 20px;">In the meantime, feel free to:</p>
          <ul>
            <li>Visit us at Plot 25-A, Block-10, Korangi, Karachi</li>
            <li>Call us at +92-300-1234567</li>
            <li>Chat with us on WhatsApp</li>
          </ul>
          <p>We look forward to helping you achieve your fitness goals!</p>
          <p><strong>Best regards,<br>GYM Fitness Hub Team</strong></p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: `Failed to send message: ${errorMessage}` },
      { status: 500 }
    );
  }
}
