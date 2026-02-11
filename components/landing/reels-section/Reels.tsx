"use client";

import * as motion from "motion/react-client";
import { Play, Sparkles } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Reels() {
  const reels = [
    {
      id: 1,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f4fefc7ce8b05834947204ef5a3b9c85674c169f?width=355",
      duration: "1:20",
      size: "tall",
    },
    {
      id: 2,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/113da702de984fea41142e1eac10ae8ab5d5c067?width=356",
      duration: "0:58",
      size: "small",
    },
    {
      id: 3,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/9d94abaddb05d482a14423e86adac4e20254dcf9?width=355",
      duration: "1:45",
      size: "small",
    },
    {
      id: 4,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/db7bda0375b2640886db2a6e37d3e6749d01568d?width=357",
      duration: "2:10",
      size: "tall",
    },
    {
      id: 5,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/176469e329ab9426c5527b67b0cb3b0239fd5e51?width=355",
      duration: "1:30",
      size: "small",
    },
    {
      id: 6,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ce3ed4b9a5405599d8093b4ff1d2ce1c77483ebd?width=356",
      duration: "0:45",
      size: "small",
    },
    {
      id: 7,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d8cbd2d3c3b31cd159576f851cd545587284df1b?width=357",
      duration: "1:55",
      size: "tall",
    },
  ];

  return (
    <section className="relative max-w-[1650px] mx-auto px-4 lg:px-[138px] py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/3 blur-3xl rounded-full -z-10" />

      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[27px] lg:text-6xl font-bold mb-6 relative inline-block"
        >
          Featured <span className="text-primary">Reels</span>
          <motion.div
            className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="md:text-lg lg:text-xl text-muted-foreground max-w-3xl mt-8 leading-relaxed"
        >
          Experience luxury through our lens.
          <span className="text-primary font-semibold">
            {" "}
            Premium properties and vehicles
          </span>{" "}
          showcased in stunning detail.
        </motion.p>
      </motion.div>

      <div className="flex justify-center gap-6 items-center flex-wrap lg:flex-nowrap">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ReelCard reel={reels[0]} tall />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ReelCard reel={reels[1]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <ReelCard reel={reels[2]} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ReelCard reel={reels[3]} tall />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <ReelCard reel={reels[4]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ReelCard reel={reels[5]} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <ReelCard reel={reels[6]} tall />
        </motion.div>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
  tall = true,
}: {
  reel: { id: number; src: string; duration: string };
  tall?: boolean;
}) {
  return (
    <div
      className={`
        rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:-translate-y-2
        h-[408px] w-[272px]
        lg:${tall ? "h-[408px] w-[272px]" : "h-[272px] w-[238px]"}
      `}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={reel.src}
          alt={`Reel ${reel.id}`}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <motion.div
          className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/50 border-2 border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-7 h-7 text-white ml-1 fill-white" />
        </motion.div>
      </div>

      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-white text-xs font-bold tracking-wider">HD</span>
        <div className="w-[1px] h-3 bg-white/20" />
        <span className="text-white text-xs font-semibold">
          {reel.duration}
        </span>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
        <Sparkles className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(209,159,31,0.6)]" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full" />
      </div>
    </div>
  );
}
