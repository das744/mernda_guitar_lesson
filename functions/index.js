const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

const mailjetTransporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
//   auth: {
//     user: process.env.MAILJET_API_KEY,
//     pass: process.env.MAILJET_SECRET_KEY,
//   },
auth: {
    user: functions.config().mailjet.api_key,
    pass: functions.config().mailjet.secret_key,
  },
});

exports.sendEmail = functions.firestore
  .document("messages/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: `"Website Contact" <info@northernmelbourneguitarlesson.com>`,
      to: "ajanta744@gmail.com", // Your receiving email
      subject: `New message from ${data.name}`,
      text: `${data.name} (${data.email}) says:\n\n${data.message}`,
    };

    try {
      await mailjetTransporter.sendMail(mailOptions);
      console.log("Email sent!");
    } catch (error) {
      console.error("Error sending email", error);
    }
  });
