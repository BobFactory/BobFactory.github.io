import type { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";


export const metadata: Metadata = {
  title: "Bawender Yandra",
  description: "Mobile Architect & Developer",
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
