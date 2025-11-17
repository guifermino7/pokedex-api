import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import Header from "./components/Header/page.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokedex c/ API",
  description: "Projeto desenvolvido com Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Header/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
