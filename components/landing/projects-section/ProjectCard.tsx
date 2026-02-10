import * as motion from "motion/react-client";
import { ArrowRight, Sparkles } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  href,
  src,
  title,
  activities,
  className = "",
  delay = 0,
}: {
  href: string;
  src: string;
  title: string;
  activities: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      <Link
        href={href}
        className="block h-[253px] rounded-[18px] overflow-hidden relative group"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-[18px] transition-all duration-500" />

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:translate-y-[-8px]">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300">
                {activities}
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
              <ArrowRight className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="mt-4 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
