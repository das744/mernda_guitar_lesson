This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


## project info
## Guitar Lesson Website
    A modern and responsive website where users can explore guitar lessons and request a complimentary lesson via a form. Submitted form data is stored securely using Firebase Firestore.

## Features
    Responsive UI for all devices
    Animated transitions using GSAP
    Firebase Firestore integration
    Clean and minimal design
    Form validation and submission feedback
    Social media links

## 📁 Folder Structure
.
├── public/
│   └── img/
├── components/
│   └── Quote.js          # Main form component
├── pages/
│   └── api/
│       └── freeLesson.js # API route to handle form submissions
├── styles/
│   └── Quote.module.css  # Component-specific styles
├── firebase/
│   └── firebase.js       # Firebase setup and Firestore initialization
└── README.md

## ⚙️ Technologies Used
    React / Next.js – Framework for building the website
    GSAP – Smooth and modern animations
    Firebase Firestore – Backend to store submitted user data
    Font Awesome – Icons
    CSS Modules – Scoped and clean styling

## 🧪 How It Works
    1.Visitors land on the site and see an engaging section encouraging them to book a free guitar lesson.

## The form captures:
    Name
    Email
    Requirement (Online / In-Person)
    Message

## On submission:
    Data is sent to /api/freeLesson.js
    Saved securely to Firebase Firestore
    A success message is shown below the form

## 🔧 Setup Instructions
    Clone the repo:
    git clone https://github.com/your-username/guitar-lesson-site.git

## Navigate to the project folder:
    cd guitar-lesson-site

Install dependencies:
    npm install

## Set up Firebase:
    Create a Firebase project at firebase.google.com
    Enable Firestore in the Firebase console
    Create a firebase/firebase.js file with your config:

    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export { db };

## Start the development server:
    npm run dev

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.