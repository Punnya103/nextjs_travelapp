import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from 'next/font/google'
import Responsive from "./components/Home/Navbar/responsive";

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// Setup task
// Customize your font { watch the video }
// Customize your meta data

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "traval app",
  description: "Here is your travell partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
<Responsive/>
        {children}
      </body>
    </html>
  );
}
