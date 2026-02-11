import * as motion from "motion/react-client";
import { ReactNode } from "react";

/**
 * Best for: h1, h2, p..... use delay.
 * from down to up
 */
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Best for: navbar.
 * from down to top
 */
interface AnimatedFromTop {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
}

export function AnimatedFromTop({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: AnimatedFromTop) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, y: -40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Best for: div
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childrenDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.15,
  childrenDelay = 0.2,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childrenDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Best for: cards, list items, grid items.
 */
interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedItem({ children, className = "" }: AnimatedItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Best for: cards, images, icons, small blocks for pop in smoothly.
 */
interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({ children, className = "", delay = 0 }: ScaleInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.85 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Best for: text blocks, feature rows, side-by-side layouts.
 */
interface SlideFromLeftProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SlideFromLeft({
  children,
  className = "",
  delay = 0,
}: SlideFromLeftProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: -40, scale: 0.95 },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Use this for: content that should slide in from the right.
 * Best for: images, side content, alternating sections.
 */
interface SlideFromRightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SlideFromRight({
  children,
  className = "",
  delay = 0,
}: SlideFromRightProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, x: 40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Use this for: adding an animated underline effect under titles.
 * Best for: headings (h1/h2/h3), section titles.
 * IMPORTANT: wrap your real heading outside, and put this underline inside it.
 *
 * Example:
 * <h2 className="relative inline-block">
 *   Title
 *   <AnimatedUnderline />
 * </h2>
 */
interface AnimatedUnderlineProps {
  className?: string;
  delay?: number;
}

export function AnimatedUnderline({
  className = "",
  delay = 0.5,
}: AnimatedUnderlineProps) {
  return (
    <motion.div
      className={`absolute -bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/**
 * Use this for: hover scaling any element.
 * Best for: cards, buttons, clickable blocks.
 */
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function HoverScale({
  children,
  className = "",
  scale = 1.05,
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Use this for: tap/press scaling any element.
 * Best for: buttons, cards, mobile-friendly interactions.
 */
interface TapScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function TapScale({
  children,
  className = "",
  scale = 0.95,
}: TapScaleProps) {
  return (
    <motion.div
      whileTap={{ scale }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
