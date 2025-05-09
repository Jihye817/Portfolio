import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박지혜 | 프론트엔드 개발자",
  description: "프론트엔드 개발자 박지혜의 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
