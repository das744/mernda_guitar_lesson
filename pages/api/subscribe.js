// pages/api/subscribe.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Invalid email address." });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Using Gmail as the email service
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password or regular password (if 2FA is off)
      },
      secure: true, // Use TLS
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECIPIENT_EMAIL, // Recipient email address
      subject: "New Subscription", // Email subject
      text: `New subscription from: ${email}`, // Email body content
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Subscription successful!" });
    } catch (error) {
      console.error("Error sending email:", error); // Log the full error for debugging
      return res.status(500).json({ message: `Failed to send email: ${error.message}` });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
