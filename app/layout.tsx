import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dhebe.com'),
  title: {
    default: 'Base64 Studio | Free Online Base64 Encoder and Decoder Tools',
    template: '%s | Base64 Studio',
  },
  description:
    'Free online Base64 encoder and decoder tools for text, images, URLs, audio, PDFs, HTML, CSS, files, hex, and more.',
  applicationName: 'Base64 Studio',
  keywords: [
    'base64 converter',
    'base64 encoder',
    'base64 decoder',
    'image to base64',
    'base64 to text',
    'pdf to base64',
    'base64 to image',
    'hex to base64',
    'base64 tools',
  ],
  alternates: {
    canonical: '/',
  },
  category: 'technology',
  openGraph: {
    type: 'website',
    url: 'https://dhebe.com',
    siteName: 'Base64 Studio',
    title: 'Base64 Studio | Free Online Base64 Encoder and Decoder Tools',
    description:
      'Use Base64 Studio to encode and decode text, images, files, PDFs, audio, URLs, HTML, CSS, and hex right in your browser.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 Studio | Free Online Base64 Encoder and Decoder Tools',
    description:
      'Fast browser-based Base64 encoder and decoder tools for text, images, files, PDFs, audio, URLs, HTML, CSS, and hex.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D9BJ344ZDV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D9BJ344ZDV');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
