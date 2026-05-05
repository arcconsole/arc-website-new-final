import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const poppinsMedium = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-medium",
  weight: "500",
});

const Ethnocentric = localFont({
  src: "./fonts/Ethnocentric-Rg.otf",
  variable: "--font-ethnocentric",
  weight: "100 900",
});

const GilmerLight = localFont({
  src: "./fonts/Gilmer-Light.otf",
  variable: "--font-gilmer-light",
  weight: "100 900",
});
const Gilmer = localFont({
  src: "./fonts/Gilmer-Regular.otf",
  variable: "--font-gilmer-regular",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Arc X1",
  description: "Play More. Play Better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${Ethnocentric.variable} ${poppinsMedium.variable} ${Gilmer.variable} ${GilmerLight} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
