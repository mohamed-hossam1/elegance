import { cn } from "@/lib/utils";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

interface Props {
  className?: string;
  socials: {
    facebook: string;
    instagram: string;
    tiktok: string;
    twitter: string;
    youtube: string;
  };
}

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

type SocialKey = keyof Props["socials"];

const SOCIAL_META: Record<SocialKey, { label: string; Icon: ComponentType<{ className?: string }> }> = {
  facebook:  { label: "Facebook",  Icon: Facebook  },
  instagram: { label: "Instagram", Icon: Instagram },
  tiktok:    { label: "TikTok",    Icon: TikTok    },
  twitter:   { label: "Twitter",   Icon: Twitter   },
  youtube:   { label: "YouTube",   Icon: Youtube   },
};

export default function SocialIcons({ socials, className }: Props) {
  const active = (Object.entries(socials) as [SocialKey, string][]).filter(
    ([, url]) => url.trim() !== ""
  );

  if (active.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {active.map(([key, href]) => {
        const { label, Icon } = SOCIAL_META[key];
        return (
          <Link
            key={key}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/70 text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/50 hover:bg-primary/5"
          >
            <Icon className="h-4 w-4" />
          </Link>
        );
      })}
    </div>
  );
}