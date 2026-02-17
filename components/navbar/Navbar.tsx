"use client";

import { useState } from "react";
import {
  ArrowDown,
  Facebook,
  Instagram,
  Languages,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { motion, AnimatePresence } from "motion/react";
import { ROUTES } from "@/constants/routes";
import logo from "@/public/logo.png";
import Image from "next/image";
import {
  AnimatedFromTop,
  HoverScale,
  TapScale,
} from "@/lib/animations/components";
import SocialIcons from "./SocialIcons";

const navLinks = [
  { label: "Home", href: ROUTES.LABDING_PAGE },
  { label: "Real Estate", href: ROUTES.REAL_ESTATE },
  { label: "Cars", href: ROUTES.CARS },
];

const Navbar = () => {
  const location = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [language, setLanguage] = useState<"English" | "Arabic">("English");

  return (
    <header className="relative">
      <AnimatedFromTop className="fixed max-w-[1650px] mx-auto px-4 lg:px-[138px] py-1 top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-18 relative z-10">
          <Link
            href={ROUTES.LABDING_PAGE}
            className="flex items-center gap-2.5 group relative"
          >
            <HoverScale className="relative flex h-14 w-14 items-center justify-center rounded-xl gold-gradient overflow-hidden">
              <TapScale>
                <Image
                  src={logo}
                  alt="Elegance Logo"
                  width={56}
                  height={56}
                  className="relative z-10 transition-transform duration-500  "
                />
              </TapScale>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-500" />{" "}
            </HoverScale>

            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="hidden lg:block font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              Elegance
            </motion.span>
          </Link>

          <div className="hidden items-center gap-1 md:flex relative">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-sm font-medium transition-all duration-300 relative z-10 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {hoveredLink === link.href && !isActive && (
                    <motion.div
                      layoutId="hoverBg"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ModeToggle />

            <SocialIcons />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Select language"
                  className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/70 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-all duration-300 hover:text-foreground hover:border-primary/50 hover:bg-primary/5"
                >
                  <span>{language}</span>
                  <ArrowDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px]">
                <DropdownMenuItem onSelect={() => setLanguage("English")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setLanguage("Arabic")}>
                  Arabic
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <Button
              className="primary-gradient group relative overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              size="sm"
              asChild
            >
              <Link href="/real-estate" className="py-5 px-6 relative z-10">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Us
                </span>

                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </Button> */}
          </div>

          <div className="flex items-center z-50 gap-2 md:hidden">
            <ModeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group">
                  <AnimatePresence mode="wait">
                    {!open ? (
                      <motion.div
                        key="menu"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5 text-foreground" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="close"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5 text-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-80 border-border/50 bg-background/95 backdrop-blur-xl p-0 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full" />

                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>

                <motion.div
                  className="relative mt-8 flex flex-col gap-8 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg gold-gradient relative overflow-hidden group">
                      <span className="font-display text-lg font-bold text-primary-foreground relative z-10">
                        E
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Elegance</h3>
                      <p className="text-xs text-muted-foreground">
                        Premium Selection
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link, index) => {
                      const isActive = location === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                            }`}
                          >
                            <span className="text-lg font-medium">
                              {link.label}
                            </span>

                            {isActive ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-primary"
                              />
                            ) : (
                              <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              </motion.div>
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

                  <div className="flex items-center justify-between gap-3">
                    <SocialIcons />
                  </div>

                  {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      className="w-full primary-gradient group relative overflow-hidden shadow-lg shadow-primary/20"
                      size="lg"
                      asChild
                      onClick={() => setOpen(false)}
                    >
                      <Link
                        href={ROUTES.REAL_ESTATE}
                        className="flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10">Contact Us</span>

                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                      </Link>
                    </Button>
                  </motion.div> */}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-xs text-muted-foreground mt-4"
                  >
                    Premium Real Estate & Luxury Cars
                  </motion.div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </AnimatedFromTop>
    </header>
  );
};

export default Navbar;
