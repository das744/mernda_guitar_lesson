// pages/api/subscribe.js
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    await addDoc(collection(db, "subscriptions"), {
      email,
      subscribedAt: new Date(),
    });

    return res.status(200).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error saving subscription:", error);
    return res.status(500).json({ message: "Failed to subscribe" });
  }
}
