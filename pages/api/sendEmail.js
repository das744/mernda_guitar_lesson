import transporter from '../../lib/email';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const mailOptions = {
        from: email, // Sender's email
        to: process.env.NEXT_PUBLIC_WP_ADMIN_EMAIL, // Admin email
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}


// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         auth: {
//           user: process.env.EMAIL_USER,   // Your Gmail email
//           pass: process.env.EMAIL_PASS,   // Your Gmail App Password (if using 2FA)
//         },
//       });

//       // Setup email data
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.NEXT_PUBLIC_WP_ADMIN_EMAIL,  // WordPress admin email
//         subject: 'New Contact Form Submission',
//         text: `You have a new contact form submission!`,
//       };

//       // Send email
//       const info = await transporter.sendMail(mailOptions);

//       res.status(200).json({ message: 'Email sent successfully!', info });
//     } catch (error) {
//       res.status(500).json({ message: 'Email not sent', error });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end('Method Not Allowed');
//   }
// }
