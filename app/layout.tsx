import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurus Voice Intelligence | Speak • Shape • Ship",
  description: "Der native Desktop-KI-Assistent für macOS, Windows und Linux. Von Stimme zu Klarheit - Verwandle Gedanken blitzschnell in Action Items, Dev-Logs oder professionelle E-Mails.",
  keywords: ["KI Sprachassistent", "Tauri App", "Voice to Task", "Productivity Tool", "Deepgram", "GPT-4o", "Claude 3.5"],
  icons: {
    icon: "/images/aurus-logo-app.png",
    apple: "/images/aurus-logo-app.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-voice-bg text-slate-50 antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}