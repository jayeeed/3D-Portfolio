/* eslint-disable */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills, prime, pop, services } from "../constants";
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
          speed: 450,
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

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.introText} lg:mr-6`}
        >
          I'm a skilled software developer with experience in{" "}
          <span className={styles.primeText}>{prime.join(" & ")}</span> My
          passion lies in creating innovative solutions to complex problems
          using cutting-edge technologies like{" "}
          <span className={styles.skillsText}>{skills.join(", ")}</span> and
          more. I'm a quick learner and collaborate closely with clients to
          create <span className={styles.popText}>{pop.join(", ")}</span>{" "}
          solutions that solve real-world problems. Let's work together to bring
          your ideas to life!
        </motion.p>

        {/* Circular Image Holder on the right */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="w-80 md:h-80 rounded-full overflow-hidden mx-auto lg:ml-6 mb-6 lg:mb-0"
        >
          <img
            src="./me.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
