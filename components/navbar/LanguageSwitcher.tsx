"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ArrowDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "ar") => {
    // Replace the locale segment in the path
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          suppressHydrationWarning
          type="button"
          aria-label="Select language"
          className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-all duration-300 hover:text-foreground hover:border-primary/50 hover:bg-primary/5"
        >
          <span>{locale === "ar" ? "العربية" : "English"}</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-35">
        <DropdownMenuItem onSelect={() => switchLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => switchLocale("ar")}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;