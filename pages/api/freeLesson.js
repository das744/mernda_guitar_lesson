import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, lessonType } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Your Website <noreply@yourdomain.com>',
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Free Lesson Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nLesson Type: ${lessonType}`,
    });

    return res.status(200).json({ message: 'Request sent successfully', response });
  } catch (error) {
    console.error('Error sending request:', error);
    return res.status(500).json({ message: 'Failed to send request', error });
  }
}
