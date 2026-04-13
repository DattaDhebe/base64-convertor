import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Base64 Converter',
  description: 'Convert files and images to base64 format effortlessly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
