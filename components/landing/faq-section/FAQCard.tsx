import { SlideFromLeft } from "@/lib/animations/components";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as motion from "motion/react-client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQCard({
  faq,
  index,
  isOpen,
  onToggle,
}: FAQCardProps) {
  return (
    <SlideFromLeft delay={index * 0.1} className="group relative ">
      <div
        className={`rounded-2xl border overflow-hidden transition-all duration-500  ${
          isOpen
            ? "border-primary bg-gradient-to-br from-card to-primary/5 shadow-xl shadow-primary/10"
            : "border-primary/30 bg-card/50 hover:border-primary/50"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

        <button
          onClick={onToggle}
          className="w-full cursor-pointer flex items-center justify-between gap-4 p-6 lg:p-8 text-left transition-colors duration-300 relative z-10"
        >
          <div className="absolute left-6 top-4 text-sm font-bold text-primary/30">
            {String(index + 1).padStart(2, "0")}
          </div>

          <span
            className={`text-lg lg:text-xl font-semibold mt-4 lg:mt-0 pr-4 transition-colors duration-300 ${
              isOpen
                ? "text-primary"
                : "text-foreground group-hover:text-primary"
            }`}
          >
            {faq.question}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-primary/20 border-2 border-primary"
                : "bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:border-primary/50"
            }`}
          >
            <ChevronDown
              className={`w-5 h-5 transition-colors duration-300 ${
                isOpen
                  ? "text-primary"
                  : "text-muted-foreground group-hover:text-primary"
              }`}
            />
          </motion.div>
        </button>

        <AnimatePresence initial={true}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />

                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-muted-foreground leading-relaxed text-base lg:text-lg"
                >
                  {faq.answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        )}
      </div>
    </SlideFromLeft>
  );
}
