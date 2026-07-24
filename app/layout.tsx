import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'NOOR Barber | Premium Grooming & Fades in Maidstone',
  description: 'Sharp cuts, premium grooming, and a five-star experience in Maidstone. Specializing in precision fades and beard grooming.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#0F0F0F] text-gray-200 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
