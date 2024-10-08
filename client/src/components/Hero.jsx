/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { Suspense, lazy } from "react";

// Dynamically import
const BotCanvas = lazy(() => import("../components/canvas/Bot"));

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-8`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white mb-4`}>
            Hi, I'm <span className="text-[#915EFF]">Jayed</span>
          </h1>
          <Suspense
            fallback={
              <div className={`${styles.heroSubText} mt-2 text-white-100`}>
                Loading...
              </div>
            }
          >
            <TypeAnimation
              sequence={[
                "I Do Machine Learning",
                1000,
                "I Do Software Development",
                1000,
                "I Do Software Quality Assurance",
                1000,
              ]}
              speed={20}
              deletionSpeed={30}
              repeat={Infinity}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            />
          </Suspense>
        </div>
      </div>

      {/* Use Suspense to wrap the dynamically imported component */}
      <Suspense fallback={null}>
        <BotCanvas />
      </Suspense>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
