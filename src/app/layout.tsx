"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import { useEffect, useState } from "react";
import PreLoader from "../components/Common/PreLoader";
import { LanguageProvider } from "@/context/LanguageContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en"> 
      <head />
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
            <LanguageProvider>
              <ThemeProvider
                attribute="class"
                enableSystem={false}
                defaultTheme="light"
              >
                  <Header />
                    {children}
                  <Footer />
                  <ScrollToTop />
              </ThemeProvider>
              </LanguageProvider>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
