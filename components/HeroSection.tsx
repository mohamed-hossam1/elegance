import * as motion from "motion/react-client";
import { ArrowRight, Building, Car, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const HeroSection = () => {
  return (
    <>
      <section className="max-w-[1650px] relative mx-auto px-4 lg:px-[138px] mt-20 py-12 lg:py-[120px]">
        <div className="container mx-auto px-4">
          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-11">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <div className="relative">
                <div className="absolute top-22 left-0 w-full h-[30px] bg-[#D19F1F]  blur-[200px]" />
              </div>

              <motion.p
                variants={fadeUp}
                className="mb-3 font-semibold uppercase z-40 tracking-[0.2em] text-primary"
              >
                Premium Real Estate & Luxury Cars
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl z-40 font-bold leading-[1.15] text-foreground md:text-5xl lg:text-6xl"
              >
                WHERE<span className="text-primary"> ELEGANCE</span>
                <br />
                MEETS EXCELLENCE
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-lg z-40 text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                We don't just sell properties and cars — we deliver
                life-changing decisions with one move. Expert guidance,
                transparent deals, and the luxury you actually deserve.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Button
                  className="bg-card hover:bg-card/80 z-40 border border-primary"
                  size="lg"
                  asChild
                >
                  <Link
                    href={ROUTES.REAL_ESTATE}
                    className=" text-primary py-6"
                  >
                    <div className=" flex gap-2 justify-center items-center">
                      <Building className="h-4 w-4" color="#D19F1F" />
                      <span className="text-primary ">Browse Real Estate</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </Link>
                </Button>
                <Button
                  className="primary-gradient z-40 py-6"
                  size="lg"
                  asChild
                >
                  <Link href={ROUTES.CARS} className="gap-2">
                    <div className=" flex gap-2 justify-center items-center">
                      <Car className="h-4 w-4" />
                      Browse Cars
                      <ArrowRight className="w-3.5 h-3.5 " />
                    </div>
                  </Link>
                </Button>
                <div className="relative border-b border-primary pb-8 w-full"></div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex-1 relative w-full lg:w-auto">
                <div className="grid grid-cols-2 gap-3 relative">
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/de5ee789e574af49452eaed2707f48bcfaf47d2d?width=445"
                    alt="Property 1"
                    width={150}
                    height={150}
                    className="w-full h-[150px] -translate-y-5  object-cover rounded-lg"
                  />
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/665a45f089407c63902c17a17c78dc285f7e71f0?width=445"
                    alt="Property 2"
                    width={150}
                    height={150}
                    className="w-full h-[202px] translate-y-5 object-cover rounded-lg"
                  />
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b3660a04e8fd438e22b71718f1eeace74e7cad89?width=445"
                    alt="Car 1"
                    width={150}
                    height={150}
                    className="w-full h-[202px] -translate-y-15  object-cover rounded-lg"
                  />
                  <Image
                    src="https://api.builder.io/api/v1/image/assets/TEMP/a6cd0fb96a7f17b3dab7d62d9b9298999486650d?width=445"
                    alt="Car 2"
                    width={150}
                    height={150}
                    className="w-full h-[147px] translate-y-8 object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
