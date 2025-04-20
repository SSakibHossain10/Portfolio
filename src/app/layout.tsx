import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./app.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakib's Portfolio",
  description: "Sakib's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} antialiased`}>{children}</body>
    </html>
  );
}
