import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RouteDelayGate from "@/components/RouteDelayGate";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Antonio Vita",
  description: "Software Engineer | Computer Science Merit Scholar at PUC-Rio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const envDelay = process.env.NEXT_PUBLIC_GLOBAL_DELAY_MS;
  const delayMs = Number.isFinite(Number(envDelay)) ? Number(envDelay) : 3000;

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <NavBar />
        <RouteDelayGate delayMs={delayMs} showOnRouteChange={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
