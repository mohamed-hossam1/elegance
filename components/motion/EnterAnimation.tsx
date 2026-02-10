import * as motion from "motion/react-client";

export default function EnterAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.3, bounce: 0.4 },
      }}
    >
      {children}
    </motion.div>
  );
}
