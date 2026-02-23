import "../globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { readConfig } from "@/lib/config/config";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

interface Props {
  children: React.ReactNode;
  params: RouteParams["params"];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const session = await auth();
  const config = readConfig();
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <SessionProvider session={session}>
          <NextIntlClientProvider messages={messages}>
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
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
