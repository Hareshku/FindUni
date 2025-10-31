import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniStat",
  description:
    "UniStat is a website falls under the education section. It aims to help students in their college application by organizing the steps of this process to ensure they get accepted in their dream schools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
        rel="stylesheet"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
