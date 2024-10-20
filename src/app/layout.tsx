import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "전아련 (프론트엔드)",
  description: "프론트엔드 개발자 전아련의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
