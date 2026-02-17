import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

function WhatsApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.52 3.477A11.944 11.944 0 0012.016 0C5.373 0 0 5.373 0 12c0 2.11.55 4.17 1.59 6.01L0 24l6.22-1.64A11.94 11.94 0 0012.016 24c6.642 0 12.016-5.373 12.016-12 0-3.203-1.247-6.216-3.512-8.523zM12.016 22.03c-1.93 0-3.822-.52-5.47-1.51l-.392-.233-3.694.975.985-3.6-.255-.37A9.964 9.964 0 012.02 12c0-5.52 4.48-10 9.996-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0122.02 12c0 5.52-4.48 10.03-10.004 10.03zm5.47-7.547c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.48-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.49 1.08 2.94 1.23 3.14.15.2 2.12 3.24 5.13 4.55.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com", Icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/", Icon: WhatsApp },
];
export default function SocialIcons() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/70 text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/50 hover:bg-primary/5"
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}
