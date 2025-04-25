import type { Metadata } from "next";
import "./app.css";

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
      <body className="text-primary-300 bg-primary-gradient max-w-dvw">
        {children}
      </body>
    </html>
  );
}
