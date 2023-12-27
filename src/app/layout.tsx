import React from 'react';
import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SSR Amritapuri | Amrita Vishwa Vidyapeetham',
  description: 'Student Social Responsibility Initiative - Amrita Vishwa Vidyapeetham, Amritapuri Campus',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <body className={inter.className}>
              {children}
          </body>
      </html>
  );
}
