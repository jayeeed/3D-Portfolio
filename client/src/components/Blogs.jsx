/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, onClick }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={onClick}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 500,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Blogs = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseWindow = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Take a look at my</p>
        <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
      </motion.div>

      <div className="mt-20 justify-center flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="mt-20 fixed inset-0 flex justify-center items-center z-99">
          <div className="bg-white p-10 rounded-2xl w-[85%] h-[100%] m-4 overflow-y-auto">
            <div className="relative mb-4 w-full block">
              {/* Prevent page scrolling when window is opened */}
              <style>
                {`
                  body {
                    overflow: hidden;
                  }
                `}
              </style>

              <button
                className="absolute top-5 right-5 p-1 px-3 text-5xl font-bold bg-red-700 text-white rounded-2xl"
                onClick={handleCloseWindow}
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-bold mt-8 mb-4 text-black">
                  {selectedProject.name}
                </h2>
                <p className="text-lg mb-4 text-black">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
