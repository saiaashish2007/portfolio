import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const sans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sai Bharadwaj — Software & AI Engineer',
  description:
    'CS at UIUC. Personal projects in voice AI, retrieval, healthcare, and financial markets, with source code, tech stacks, and live demos.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-neutral-900">{children}</body>
    </html>
  );
}
