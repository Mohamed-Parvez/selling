import type { Metadata } from "next";
import "../../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce Buying and selling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
