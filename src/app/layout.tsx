import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arsenal Malmö",
  description: "Supporterklubben för Gooners i Skåne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={inter.className + " bg-black text-white"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

