import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woodworks Dublin — Bespoke Furniture, Made in Dublin",
  description:
    "Bespoke kitchens, bedrooms and living room furniture handcrafted in Dublin since the 1970s. Showroom at The Rise, Glasnevin. Workshop in Ballycoolin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
