import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Poppins } from "next/font/google";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "AM English",
  description: "AI-Powered English tools created by Ahmed Mahmoud",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir={"ltr"} suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <ReactQueryProvider>
          <body
            className={`antialiased overflow-x-hidden ${poppins.className}`}
          >
            {children}
          </body>
        </ReactQueryProvider>
      </ThemeProvider>
    </html>
  );
}
