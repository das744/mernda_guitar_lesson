import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';
import { Poppins, Lora } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata = {
  title: "Northern Guitar Music Lesson",
  description: "Northern Guitar Music Lesson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Font CDN */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
