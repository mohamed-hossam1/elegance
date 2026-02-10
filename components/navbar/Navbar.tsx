"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ROUTES } from "@/constants/routes";
import logo from "../../public/logo.png";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: ROUTES.LABDING_PAGE },
  { label: "Real Estate", href: ROUTES.REAL_ESTATE },
  { label: "Cars", href: ROUTES.CARS },
];

const Navbar = () => {
  const location = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-18">
        <Link href={ROUTES.LABDING_PAGE} className="flex items-center gap-2.5">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg gold-gradient">
            <Image src={logo} alt="Elegance Logo" width={64} height={64} />
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />
          <Button className="primary-gradient" size="sm" asChild>
            <Link href="/real-estate" className="py-5 px-3">
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-foreground" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 border-border bg-card p-0"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6 p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg gold-gradient">
                  <span className="font-display text-sm font-bold text-primary-foreground">
                    E
                  </span>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      location === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Button
                  className="primary-gradient"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link href={ROUTES.REAL_ESTATE}>Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
