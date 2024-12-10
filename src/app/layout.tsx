import type { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";


export const metadata: Metadata = {
  title: "Bawender Yandra Portfolio",
  description: "Mobile Architect & Developer",
  creator: "Bawender Yandra",
  icons: "https://i.ibb.co/C6tR3Qy/PXL-20211113-122803985-MP-2.jpg",
};

// Configure Figtree font
const figTree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figTree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
