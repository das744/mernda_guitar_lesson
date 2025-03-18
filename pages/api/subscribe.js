import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Website <noreply@yourdomain.com>',
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Newsletter Subscription`,
      text: `A new user has subscribed to your newsletter: ${email}`,
    });

    return res.status(200).json({ message: 'Subscription successful', response });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ message: 'Failed to subscribe', error });
  }
}
