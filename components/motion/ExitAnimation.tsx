"use client";

import { AnimatePresence, motion } from "motion/react";

export default function ExitAnimation({
  isOpen,
  children,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  return (
    <div>
      <AnimatePresence initial={true}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
