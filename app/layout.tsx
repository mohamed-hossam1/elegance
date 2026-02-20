import "./globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { readConfig } from "@/lib/config";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const config = readConfig();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-background">
              <Navbar socials={config.company.socials} />
              {children}
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
