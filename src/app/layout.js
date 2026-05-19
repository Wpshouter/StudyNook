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

export const metadata = {
  title: "StudyNook – Library Study Room Booking",
  description: "StudyNook is a plateform where students and library users can list study rooms they control",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children} 
        <ToastContainer />
      </body>
        

    </html>
  );
}
