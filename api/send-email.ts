// Resend API integration - COMMENTED OUT until API key is available
// TODO: Uncomment when Resend API key is configured

/*
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Awareness Africa Foundation <noreply@awarenessafrica.org>',
      to: ['info@awarenessafrica.org'],
      replyTo: email,
      subject: `New Contact Form Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #C5A059; padding-bottom: 10px;">
            New Contact Form Inquiry
          </h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${message ? `<p><strong>Message:</strong></p><p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #C5A059; margin-top: 10px;">${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5; color: #666; font-size: 12px;">
            <p>This inquiry was submitted through the Awareness Africa Foundation website contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Inquiry

Name: ${name}
Email: ${email}
${message ? `Message: ${message}` : ''}

---
This inquiry was submitted through the Awareness Africa Foundation website contact form.
You can reply directly to this email to respond to ${name}.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    return res.status(200).json({ success: true, messageId: data?.id });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
*/

// Placeholder handler to prevent build errors
export default async function handler(req: any, res: any) {
  return res.status(503).json({ error: 'Email service not configured. Resend API key required.' });
}
