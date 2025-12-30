import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "H7N Perfumes – Luxury Inspired Fragrances",
  description: "H7N Perfumes – luxury inspired women's and men's fragrances with strong, long-lasting scent at a limited-time promo price.",
  openGraph: {
    title: "H7N Perfumes – Luxury Inspired Fragrances",
    description: "Discover women's and men's inspired fragrances with rich, long-lasting scent at a special -50% promo price.",
    type: "website",
    url: "https://h7n-perfumes.example",
    images: ["https://via.placeholder.com/1200x630?text=H7N+Perfumes"],
  },
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

