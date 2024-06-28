import type { Metadata } from "next";
import { Inter, Alatsi, Acme,Alata } from "next/font/google";
import "./globals.css";
import { TopMenu } from "@/components";

const inter = Inter({ subsets: ["latin"] });
const alatsi = Alatsi({ subsets: ["latin"], weight: "400", variable: "--font-alatsi", display: "swap" });
const acme = Acme({ subsets: ["latin"], weight: "400", variable: "--font-alatsi", display: "swap" });

const alata = Alata({ subsets: ["latin"], weight: "400", variable: "--font-alatsi", display: "swap" });

export const metadata: Metadata = {
  title: "Vecinos nueva cordoba",
  description: "Ayudando a conectar la vecindad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${alata.className}`}>
        
        {children}
      </body>
    </html>
  );
}
