import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Libre_Franklin } from 'next/font/google'
import { ScreenSize } from "@/components/screen";



const libre = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({ subsets: ["latin"] });

let title = 'Write your resignation letters fast';
let description = 'Get insights on your PDFs, reduce your workload, and get more done!';
let ogimage = 'https://rachit.ai/bot-icon.png';
let url = 'https://rachit.ai';
let sitename = 'rachit.ai';
// lamo this is stupid
export const metadata: Metadata = {
   keywords :[
    "AI resignation letter writer",
    "Automated resignation letter generator",
    "AI-powered resignation assistance",
    "Machine learning resignation letter templates",
    "Natural language processing for resignation letters",
    "AI career transition tools",
    "Virtual resignation assistant",
    "Resignation letter writing AI",
    "AI-generated professional resignation letters",
    "Machine learning for career changes",
    "AI-assisted job transition",
    "Automated resignation email writer",
    "AI resignation notice generator",
    "Intelligent resignation letter creator",
    "AI-driven career move assistance",
    "Machine learning-based resignation writing",
    "NLP-powered resignation letter assistant",
    "AI tools for resigning from your job",
    "Smart resignation letter builder",
    "AI-crafted professional resignation notices",
    "Resignation letter automation with AI",
    "Machine learning to simplify job transitions",
    "AI to streamline the resignation process",
    "Cognitive computing for career changes",
    "Resignation letter writing made easy with AI",
    "AI-augmented job transition strategies",
    "Intelligent resignation workflow tools",
    "AI-generated resignation best practices",
    "Machine learning insights for smoother job changes"
    ],
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre.className+"bg-white"}>
        <ScreenSize />
        {children}</body>
    </html>
  );
}
