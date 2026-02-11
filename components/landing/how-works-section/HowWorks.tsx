import * as motion from "motion/react-client";
import {
  Calendar,
  FileCheck,
  Key,
  Search,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import StepCard from "./StepCard";

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
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HowWorks() {
  const steps = [
    {
      icon: Search,
      number: 1,
      title: "Browse & Select",
      description:
        "Explore our curated collection of properties and cars. Filter by budget, location, or features to find your perfect match.",
    },
    {
      icon: Calendar,
      number: 2,
      title: "Book Consultation",
      description:
        "Schedule a free call with your dedicated advisor. Get personalized recommendations tailored to your needs and preferences.",
    },
    {
      icon: FileCheck,
      number: 3,
      title: "We Handle Everything",
      description:
        "From paperwork to financing to legal review—sit back while we do the heavy lifting. Your peace of mind is our priority.",
    },
    {
      icon: Key,
      number: 4,
      title: "Get Your Keys",
      description:
        "Move into your new home or drive away in your new car. Simple as that. Welcome to the Elegance family.",
    },
  ];

  return (
    <section
      id="how"
      className="relative max-w-[1650px] mx-auto px-4 lg:px-[138px] py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/3 blur-3xl rounded-full -z-10" />

      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={stagger}
      >

        <motion.h2
          variants={fadeUp}
          className="text-3xl lg:text-5xl font-bold mb-4 relative inline-block"
        >
          How It <span className="text-primary">Works</span>
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground max-w-2xl mt-6"
        >
          Most people think buying property or a car is complicated.
          <span className="text-primary font-semibold">
            {" "}
            We made it stupid simple
          </span>
          —just 4 easy steps to your dream purchase.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-6 mb-16">
        {steps.map((step, index) => (
          <StepCard key={step.number} {...step} delay={index * 0.15} />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              delay: 0.6,
            },
          },
        }}
        className="relative mt-20"
      >
        <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card/50 to-primary/5 p-8 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 blur-2xl rounded-full" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Experience <span className="text-primary">Luxury</span>?
            </h3>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait. Your dream property or car is just a few clicks away.
              Browse our exclusive collection and start your journey to elegance
              today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="group primary-gradient px-8 py-6 text-base relative overflow-hidden shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href={ROUTES.REAL_ESTATE} className="gap-3">
                  <Building className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold">
                    Browse Properties
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>

              <Button
                className="group bg-card hover:bg-card/80 border-2 border-primary/50 hover:border-primary px-8 py-6 text-base relative overflow-hidden transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href={ROUTES.CARS} className="gap-3">
                  <Car className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold text-primary">
                    Browse Vehicles
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Expert Guidance</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />
        </div>
      </motion.div>
    </section>
  );
}
