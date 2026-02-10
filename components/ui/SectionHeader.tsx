import * as motion from "motion/react-client";


export const SectionHeader = ({ title, subtitle }:{title: string, subtitle:string}) => (
  <div className="text-center mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6 text-white"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-[#b2c2d2] text-lg max-w-2xl mx-auto font-medium"
    >
      {subtitle}
    </motion.p>
  </div>
);