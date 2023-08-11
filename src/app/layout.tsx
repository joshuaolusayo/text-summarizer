import NavBar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Tilt_Prism } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const tilt_prism = Tilt_Prism({
  subsets: ["latin"],
  variable: "--font-tilt-prism",
});

export const metadata: Metadata = {
  title: "Text Summarizer",
  description:
    "Automated Text Summarization using Natural Language Processing with Artificial Intelligence for Representing the Mood of the Summarized Words.",
  authors: [
    {
      url: "https://github.com/joshuaolusayo",
      name: "Joshua Oyeleke",
    },
  ],
  creator: "Joshua Oyeleke",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${tilt_prism.variable}`}
      suppressHydrationWarning
      suppressContentEditableWarning
    >
      <body className={inter.className}>
        <Toaster />
        <div>
          <h1
            className={`text-4xl md:text-6xl lg:text-9xl font-tilt-prism text-center py-8`}
          >
            Summarizer
          </h1>
          <div className="border-t-4 border-t-black grid grid-cols-8 custom-height">
            <NavBar />
            <div className="col-span-7 h-full overflow-y-scroll p-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
