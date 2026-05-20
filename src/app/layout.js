import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.jsx or app/layout.tsx
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});
export const metadata = {
  title: "StudyNook – Library Study Room Booking",
  description: "StudyNook is a plateform where students and library users can list study rooms they control",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light"
      lang="en"
      className={`${manrope.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children} 
        <ToastContainer />
      </body>
        

    </html>
  );
}
