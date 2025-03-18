// pages/api/freeLesson.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, requirement, message } = req.body;

  if (!email || !requirement || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can replace this with another provider if necessary
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to your admin email
    subject: 'New Complimentary Lesson Request',
    text: `Email: ${email}\nRequirement: ${requirement}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Email could not be sent', error: error.message });
  }
}
