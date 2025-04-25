// pages/api/contact.js

import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      timestamp: new Date(),
    });

    return res.status(200).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Firestore error:", error);
    return res.status(500).json({ success: false, message: "Failed to save message." });
  }
}
