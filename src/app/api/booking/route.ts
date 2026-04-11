import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      selectedPlan,
      preferredStartDate,
      emergencyContact,
      fitnessGoals,
      medicalConditions,
    } = body;

    // Validation
    if (!fullName || !email || !phone || !selectedPlan || !preferredStartDate) {
      return NextResponse.json(
        { success: false, error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    const planDetails: Record<string, { name: string; price: string; features: string }> = {
      BASIC: {
        name: 'Basic Plan',
        price: '₨2,500/month',
        features: 'Gym Access (6AM-10PM), Standard Equipment, Locker, Free WiFi',
      },
      PREMIUM: {
        name: 'Premium Plan',
        price: '₨4,500/month',
        features: '24/7 Access, Full Equipment, Private Locker, Personal Trainer (2x/week), Nutrition Consultation',
      },
      ELITE: {
        name: 'Elite Plan',
        price: '₨6,500/month',
        features: 'Unlimited 24/7, All Equipment, Private Locker, Personal Trainer (5x/week), Custom Nutrition, Guest Passes',
      },
    };

    const plan = planDetails[selectedPlan] || { name: selectedPlan, price: 'N/A', features: 'N/A' };

    // Email to gym owner
    const mailOptions = {
      from: `"GYM Fitness Hub Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Membership Booking: ${fullName} - ${plan.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFC107; border-bottom: 3px solid #FFC107; padding-bottom: 10px;">🏋️ New Membership Booking</h2>
          
          <div style="background: #FFF8E1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Member Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold; width: 140px;">Full Name:</td>
                <td style="padding: 8px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Email:</td>
                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Phone:</td>
                <td style="padding: 8px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Emergency Contact:</td>
                <td style="padding: 8px;">${emergencyContact || 'Not provided'}</td>
              </tr>
            </table>
          </div>

          <div style="background: #E8F5E9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Selected Plan</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold; width: 140px;">Plan:</td>
                <td style="padding: 8px;"><strong style="color: #FFC107;">${plan.name}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Price:</td>
                <td style="padding: 8px;"><strong style="color: #4CAF50;">${plan.price}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Features:</td>
                <td style="padding: 8px;">${plan.features}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background: #f5f5f5; font-weight: bold;">Start Date:</td>
                <td style="padding: 8px;">${preferredStartDate}</td>
              </tr>
            </table>
          </div>

          ${fitnessGoals ? `
            <div style="background: #E3F2FD; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Fitness Goals</h3>
              <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #2196F3;">${fitnessGoals.replace(/\n/g, '<br>')}</p>
            </div>
          ` : ''}

          ${medicalConditions ? `
            <div style="background: #FFF3E0; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Medical Conditions</h3>
              <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #FF9800;">${medicalConditions.replace(/\n/g, '<br>')}</p>
            </div>
          ` : ''}

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #888; font-size: 12px;">Sent from GYM Fitness Hub Website - Booking System</p>
        </div>
      `,
      replyTo: email,
    };

    // Auto-reply to user
    const autoReplyOptions = {
      from: `"GYM Fitness Hub" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Welcome to GYM Fitness Hub - ${plan.name} Booking Confirmation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFC107;">Welcome to the Family, ${fullName}! 🎉</h2>
          <p>Hi ${fullName},</p>
          <p>Thank you for choosing <strong>GYM Fitness Hub</strong>! We have received your membership booking request.</p>
          
          <div style="background: #FFF8E1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFC107;">
            <h3 style="margin-top: 0;">Booking Details</h3>
            <p><strong>Plan:</strong> ${plan.name}</p>
            <p><strong>Price:</strong> ${plan.price}</p>
            <p><strong>Preferred Start Date:</strong> ${preferredStartDate}</p>
          </div>

          <p>Our team will contact you within 24 hours to:</p>
          <ul>
            <li>Confirm your membership details</li>
            <li>Schedule your orientation session</li>
            <li>Process payment and issue your membership card</li>
            <li>Set up your first personal training session (if applicable)</li>
          </ul>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">What to Bring on Your First Day:</h3>
            <ul>
              <li>Valid ID card</li>
              <li>Comfortable workout clothes</li>
              <li>Water bottle</li>
              <li>Towel</li>
              <li>Positive attitude! 😊</li>
            </ul>
          </div>

          <p><strong>Location:</strong> Plot 25-A, Block-10, Korangi, Karachi, Pakistan</p>
          <p><strong>Phone:</strong> +92-300-1234567</p>

          <p style="margin-top: 30px;">We're excited to help you achieve your fitness goals!</p>
          <p><strong>Best regards,<br>GYM Fitness Hub Team</strong></p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json(
      { success: true, message: 'Booking submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending booking email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit booking' },
      { status: 500 }
    );
  }
}
