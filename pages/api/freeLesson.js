// pages/api/freeLesson.js

import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, requirement, message } = req.body;

  try {
    const docRef = await addDoc(collection(db, 'quotes'), {
      name,
      email,
      requirement,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ message: 'Quote submitted successfully', id: docRef.id });
  } catch (error) {
    console.error('Error saving quote:', error);
    return res.status(500).json({ message: 'Failed to save quote', error });
  }
}


// import { Resend } from 'resend';
// import { db } from '@/lib/firebase';
// import { collection, addDoc } from 'firebase/firestore';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { name, email, requirement, message } = req.body;

//   try {
//     // 1. Send the email using Resend
//     const emailResponse = await resend.emails.send({
//       from: 'Your Website <noreply@yourdomain.com>',
//       to: process.env.RECIPIENT_EMAIL,
//       subject: `New Free Lesson Request from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nRequirement: ${requirement}\nMessage: ${message}`,
//     });

//     // 2. Save the form data to Firebase
//     const docRef = await addDoc(collection(db, 'quotes'), {
//       name,
//       email,
//       requirement,
//       message,
//       submittedAt: new Date().toISOString(),
//     });

//     return res.status(200).json({ message: 'Request sent and saved successfully', emailResponse, docId: docRef.id });
//   } catch (error) {
//     console.error('Error handling request:', error);
//     return res.status(500).json({ message: 'Failed to process request', error });
//   }
// }

