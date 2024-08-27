/* eslint-disable */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { prime, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 1000,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="" className="w-20 h-20 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-14">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.introText} lg:mr-6`}
        >
          Passionate and results-driven professional with expertise in{" "}
          <span className={styles.primeText}>
            {prime.slice(0, -1).join(", ")}
          </span>{" "}
          & <span className={styles.primeText}>{prime.slice(-1)}</span>. Adept
          at developing innovative ML models, LLM/NLP integration, building
          robust software solutions, and ensuring the highest quality through
          meticulous testing and QA practices. With a keen sense of
          understanding complex problems, I thrive in dynamic environments,
          driving projects from conception to completion. My dedication to
          continuous learning and improvement fuels my commitment to delivering
          exceptional results and advancing technological frontiers. Let's
          connect and explore opportunities to innovate and excel together!
        </motion.p>

        {/* Circular Image Holder on the right */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="w-60 md:h-70 rounded-full overflow-hidden mx-auto lg:ml-6 mb-6 lg:mb-0"
        >
          <img
            src="./me.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="justify-center mt-28 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
