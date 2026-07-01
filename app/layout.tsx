import "./globals.css";
import { Inter, Newsreader, Sacramento, Caveat, Patrick_Hand} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});
const patrick = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick",
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${newsreader.variable}
          ${caveat.variable}
          ${patrick.variable}
          ${sacramento.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}