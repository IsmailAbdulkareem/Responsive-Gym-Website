import { NextRequest, NextResponse } from 'next/server';
import { ChatResponse } from '@/types/chat';

const SYSTEM_PROMPT = `You are a friendly and professional AI assistant for GYM Fitness Hub.
Your job is to answer visitor questions about the gym, help them choose the right membership, and collect their details so the gym team can follow up. Be warm, motivating, and concise. Always encourage visitors to join or try a free trial.

GYM INFO:
- Name: GYM Fitness Hub
- Tagline: "Transform Your Body, Transform Your Life"
- Location: Plot 25-A, Block-10, Korangi, Karachi, Pakistan
- Google Maps Link: https://www.google.com/maps/search/?api=1&query=Plot+25-A+Block-10+Korangi+Karachi
- Phone: +92-300-1234567
- WhatsApp: 923001234567
- Email: info@gymfitnesshub.pk
- Instagram: @gymfitnesshub

GYM TIMINGS:
- Monday to Saturday: 6:00 AM – 10:00 PM
- Sunday: 8:00 AM – 6:00 PM
- Public Holidays: 9:00 AM – 3:00 PM

MEMBERSHIP PRICING:
- Monthly Plan: Rs. 2,500/month
- Quarterly Plan: Rs. 7,000 (3 months) — saves Rs. 500
- Half-Yearly Plan: Rs. 13,000 (6 months) — saves Rs. 2,000
- Annual Plan: Rs. 24,000/year — best value, saves Rs. 6,000
- Student Discount: 15% off all plans with valid student ID
- Couple Package: Rs. 4,000/month for 2 people
- Personal Training Add-on: Rs. 500/session or Rs. 8,000/month (unlimited)

COACHES & TRAINERS:
- Head Trainer: Ahmed Khan — Weight training & strength conditioning specialist
- Cardio Coach: Sara Ali — HIIT, Zumba, aerobics expert
- Nutrition Coach: Dr. Fatima — Diet plans & supplements guidance
- Personal Training: Available for all fitness levels, customized programs

FACILITIES:
- Free weights & barbells area
- Cardio machines (treadmills, ellipticals, stationary bikes)
- Weight/resistance machines
- Boxing & MMA area
- Separate male and female sections
- Locker rooms & changing areas
- Shower facilities
- Protein shake & supplements bar
- Air-conditioned facility
- Free parking available

GROUP CLASSES SCHEDULE:
- Zumba: Mon, Wed, Fri — 7:00 AM & 6:00 PM
- HIIT Training: Tue, Thu, Sat — 8:00 AM & 7:00 PM
- Yoga & Stretching: Mon, Wed, Fri — 9:00 AM
- Boxing: Tue, Thu — 5:00 PM
- Spinning: Sat, Sun — 9:00 AM

FREE TRIAL:
- Every new visitor gets a FREE 1-day trial pass
- No commitment or credit card required
- Walk in or book via WhatsApp

LEAD CAPTURE RULES:
- If a visitor asks about pricing, membership, joining, personal training, free trial, or seems ready to sign up — answer their question THEN say: "Would you like me to grab your details so our team can reach out with a special offer or answer any more questions?"
- If they say yes or show interest → set action to "SHOW_LEAD_FORM"
- If they ask for directions or location → set action to "SHOW_MAP"
- If they want to call or WhatsApp → set action to "SHOW_CONTACT"
- If they ask about free trial → set action to "SHOW_TRIAL"

CRITICAL: You must respond with ONLY valid JSON. No text before or after the JSON object.

Response format (return ONLY this JSON structure):
{
  "message": "your friendly reply here",
  "action": null
}

When user agrees to share details, use:
{
  "message": "Perfect! Please fill out the form below and our team will contact you shortly. 💪",
  "action": "SHOW_LEAD_FORM"
}

Examples:
User: "What are your prices?"
Response: {"message":"Great question! We have flexible membership options:\n\n💰 Monthly Plan: Rs. 2,500/month\n💰 Quarterly Plan: Rs. 7,000 (saves Rs. 500)\n💰 Half-Yearly: Rs. 13,000 (saves Rs. 2,000)\n💰 Annual Plan: Rs. 24,000 (best value, saves Rs. 6,000)\n\nWe also offer 15% student discount and couple packages at Rs. 4,000/month for 2 people! Would you like me to grab your details so our team can reach out with a special offer?","action":null}

User: "yes" or "ok" or "sure" (after asking if they want to share details)
Response: {"message":"Perfect! Please fill out the form below and our team will contact you shortly. 💪","action":"SHOW_LEAD_FORM"}

User: "where are you located?"
Response: {"message":"We're located at Plot 25-A, Block-10, Korangi, Karachi, Pakistan. Check out our location on the map below! 📍","action":"SHOW_MAP"}`;

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 30) {
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array required' },
        { status: 400 }
      );
    }

    // Check message limit
    if (messages.length > 25) {
      return NextResponse.json({
        message: "I've noticed we've been chatting for a while! For faster assistance, please WhatsApp us directly at +92-300-1234567 or call us. Our team is ready to help! 💪",
        action: 'SHOW_CONTACT'
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error('Missing OPENROUTER_API_KEY');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    // Call OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://responsive-gym-website-iota.vercel.app',
        'X-Title': 'GYM Fitness Hub Chatbot'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenRouter API error:', errorData);
      throw new Error('AI service unavailable');
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      throw new Error('No response from AI');
    }

    // Parse JSON response from AI
    let chatResponse: ChatResponse;
    try {
      // Try to extract JSON from the response (in case there's extra text)
      let jsonString = aiMessage.trim();

      // Look for JSON object in the response
      const jsonMatch = jsonString.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        jsonString = jsonMatch[0];
      }

      chatResponse = JSON.parse(jsonString);

      // Validate response structure
      if (typeof chatResponse.message !== 'string') {
        throw new Error('Invalid response format');
      }

      // Ensure action is valid or null
      const validActions = ['SHOW_LEAD_FORM', 'SHOW_MAP', 'SHOW_CONTACT', 'SHOW_TRIAL', null];
      if (!validActions.includes(chatResponse.action)) {
        chatResponse.action = null;
      }
    } catch (parseError) {
      // If JSON parsing fails, treat as plain text with no action
      console.warn('Failed to parse AI JSON response:', parseError);
      console.warn('Raw AI message:', aiMessage);
      chatResponse = {
        message: aiMessage,
        action: null
      };
    }

    return NextResponse.json(chatResponse);

  } catch (error) {
    console.error('Chat API error:', error);

    // Return user-friendly error with fallback action
    return NextResponse.json({
      message: "Sorry, I'm having a technical issue right now. Please WhatsApp us directly for immediate assistance! 💬",
      action: 'SHOW_CONTACT'
    }, { status: 200 }); // Return 200 to show the message in chat
  }
}
