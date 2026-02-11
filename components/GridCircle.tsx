import * as motion from "motion/react-client";

export default function GridCircle({ className = "" }) {
  return (
    <div className={`absolute w-20 h-20 opacity-30 ${className}`}>
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary "
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
