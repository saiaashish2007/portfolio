import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const serif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Sai Bharadwaj — Software & AI Engineer',
  description:
    'CS at UIUC. Projects in voice AI, retrieval, clinical data, and quantitative finance, with source code, tech stacks, and live demos.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-neutral-900">{children}</body>
    </html>
  );
}
