"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";


export default function ScrollYProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 primary-gradient z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
