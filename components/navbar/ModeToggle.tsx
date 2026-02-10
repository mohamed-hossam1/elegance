"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer h-10 w-10 border-border/50 relative overflow-hidden"
        disabled
      >
        <div className="h-[1.2rem] w-[1.2rem] animate-pulse bg-muted rounded-full" />
      </Button>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer h-10 w-10 border-border/50 hover:border-primary/50 relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute"
          >
            <Moon className="h-[1.2rem] w-[1.2rem] text-primary group-hover:text-primary/80 transition-colors duration-300" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary group-hover:text-primary/80 transition-colors duration-300" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 border-2 border-primary/20 rounded-md"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}