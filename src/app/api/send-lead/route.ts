import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { Lead, SendLeadResponse } from '@/types/chat';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lead } = body as { lead: Lead };

    // Validation
    if (!lead || !lead.fullName || !lead.phone || !lead.interestedIn) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const gymName = 'GYM Fitness Hub';
    const gymWhatsApp = '923001234567';
    const gymPhone = '+92-300-1234567';

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

    const leadType = lead.type === 'FREE_TRIAL' ? 'Free Trial Request' : 'Membership Inquiry';
    const timestamp = new Date(lead.timestamp).toLocaleString('en-PK', {
      timeZone: 'Asia/Karachi',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // WhatsApp link for gym owner to contact lead
    const whatsappLeadLink = `https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hi+${encodeURIComponent(lead.fullName)},+this+is+${encodeURIComponent(gymName)}+team.+We+saw+your+inquiry+on+our+website!`;

    // EMAIL 1 — To gym owner
    const ownerMailOptions = {
      from: `"${gymName} Website" <${emailUser}>`,
      to: emailUser,
      subject: `🔥 New Lead from Gym Website – ${lead.fullName} | ${lead.interestedIn}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #FF6B00 0%, #FF2D55 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🔥 New ${leadType}!</h1>
          </div>

          <div style="padding: 30px; background: #f9f9f9;">
            <div style="background: #ffffff; border-radius: 12px; padding: 25px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0; border-bottom: 3px solid #FF6B00; padding-bottom: 10px;">Lead Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 180px;">Full Name:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${lead.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone/WhatsApp:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                    <a href="tel:${lead.phone}" style="color: #FF6B00; text-decoration: none;">${lead.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                    ${lead.email ? `<a href="mailto:${lead.email}" style="color: #FF6B00; text-decoration: none;">${lead.email}</a>` : '<span style="color: #999;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Interested In:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                    <strong style="color: #FF6B00;">${lead.interestedIn}</strong>
                  </td>
                </tr>
                ${lead.type !== 'FREE_TRIAL' ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Best Time to Call:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${lead.bestTimeToCall}</td>
                </tr>
                ` : ''}
                ${lead.questions ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Their Message:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${lead.questions}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Lead Type:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                    <span style="background: #4CAF50; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${leadType}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Received At:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${timestamp}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Source:</td>
                  <td style="padding: 12px 0; color: #333;">${lead.source}</td>
                </tr>
              </table>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${whatsappLeadLink}" style="display: inline-block; background: #25D366; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 10px;">
                💬 WhatsApp This Lead
              </a>
              ${lead.email ? `
              <a href="mailto:${lead.email}" style="display: inline-block; background: #FF6B00; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 10px;">
                📧 Reply by Email
              </a>
              ` : ''}
            </div>

            <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 4px; margin-top: 20px;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>⚡ Quick Tip:</strong> Respond within 5 minutes to increase conversion by 400%!
              </p>
            </div>
          </div>

          <div style="background: #333; color: #999; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This lead came from your gym website chatbot</p>
            <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} ${gymName}</p>
          </div>
        </div>
      `,
    };

    // EMAIL 2 — Confirmation to lead (only if email provided)
    const leadConfirmationPromises = [];

    if (lead.email) {
      const leadMailOptions = {
        from: `"${gymName}" <${emailUser}>`,
        to: lead.email,
        subject: `Welcome to ${gymName}! We'll be in touch soon 💪`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <div style="background: linear-gradient(135deg, #FF6B00 0%, #FF2D55 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px;">Welcome to ${gymName}! 💪</h1>
            </div>

            <div style="padding: 40px 30px;">
              <h2 style="color: #333; margin-top: 0;">Hi ${lead.fullName}! 👋</h2>

              <p style="color: #555; font-size: 16px; line-height: 1.6;">
                Thank you for your interest in <strong>${gymName}</strong>! We have received your ${leadType.toLowerCase()} and our team will contact you within a few hours.
              </p>

              <div style="background: #FFF8E1; border-left: 4px solid #FF6B00; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <h3 style="color: #333; margin-top: 0; font-size: 18px;">Your Inquiry Summary</h3>
                <p style="color: #555; margin: 5px 0;"><strong>Interested In:</strong> ${lead.interestedIn}</p>
                ${lead.type !== 'FREE_TRIAL' ? `<p style="color: #555; margin: 5px 0;"><strong>Best Time to Call:</strong> ${lead.bestTimeToCall}</p>` : ''}
                ${lead.questions ? `<p style="color: #555; margin: 5px 0;"><strong>Your Message:</strong> ${lead.questions}</p>` : ''}
              </div>

              <h3 style="color: #333; margin-top: 30px;">In the meantime, you can reach us directly:</h3>

              <div style="text-align: center; margin: 25px 0;">
                <a href="https://wa.me/${gymWhatsApp}" style="display: inline-block; background: #25D366; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 8px;">
                  💬 WhatsApp Us
                </a>
                <a href="tel:${gymPhone}" style="display: inline-block; background: #FF6B00; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 8px;">
                  📞 Call Now
                </a>
              </div>

              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h4 style="color: #333; margin-top: 0;">📍 Visit Us:</h4>
                <p style="color: #555; margin: 5px 0;">Plot 25-A, Block-10, Korangi, Karachi, Pakistan</p>
                <h4 style="color: #333; margin-top: 15px;">⏰ Gym Timings:</h4>
                <p style="color: #555; margin: 5px 0;">Mon-Sat: 6:00 AM – 10:00 PM</p>
                <p style="color: #555; margin: 5px 0;">Sunday: 8:00 AM – 6:00 PM</p>
              </div>

              <div style="background: linear-gradient(135deg, #FF6B00 0%, #FF2D55 100%); color: white; padding: 25px; border-radius: 8px; text-align: center; margin-top: 30px;">
                <h3 style="margin: 0 0 10px 0; font-size: 22px;">Your fitness journey starts today! 🚀</h3>
                <p style="margin: 0; font-size: 14px; opacity: 0.9;">Transform Your Body, Transform Your Life</p>
              </div>
            </div>

            <div style="background: #333; color: #999; padding: 20px; text-align: center; font-size: 12px;">
              <p style="margin: 0 0 5px 0;"><strong style="color: #FF6B00;">${gymName}</strong></p>
              <p style="margin: 0;">© ${new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>
        `,
      };
      leadConfirmationPromises.push(transporter.sendMail(leadMailOptions));
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      ...leadConfirmationPromises
    ]);

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully'
    } as SendLeadResponse);

  } catch (error) {
    console.error('Error sending lead email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: `Failed to submit lead: ${errorMessage}` } as SendLeadResponse,
      { status: 500 }
    );
  }
}
