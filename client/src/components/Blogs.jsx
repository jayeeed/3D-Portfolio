/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { blogs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleCardClick = (blog) => setSelectedBlog(blog);

  const handleCloseWindow = () => setSelectedBlog(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Take a look at my</p>
        <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
      </motion.div>

      <div className="mt-20 justify-center flex flex-wrap gap-8">
        {blogs.map((blog, index) => (
          <Tilt
            key={blog.name}
            options={{ max: 25, scale: 1, speed: 500 }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
          >
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              onClick={() => handleCardClick(blog)}
            >
              <div className="relative w-full h-[230px">
                <img
                  src={blog.image}
                  alt={blog.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {blog.name}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {blog.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <p
                    key={`${blog.name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {selectedBlog && (
        <div className="md:mx-28 md:mt-20 mt-8 fixed inset-0 flex justify-center items-center z-99">
          <div className="bg-white md:px-24 px-12 py-16 rounded-3xl w-full h-full overflow-y-auto">
            <div className="relative w-full">
              {selectedBlog && (document.body.style.overflow = "hidden")}
              <button
                className="fixed top-32 md:right-40 right-8 px-3 text-7xl font-bold bg-green-400 text-white rounded-2xl hover:bg-red-700 hover:scale-125 transition-transform ease-in-out duration-700"
                onClick={() => {
                  handleCloseWindow();
                  document.body.style.overflow = "";
                }}
              >
                &times;
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.name}
                className="w-full object-cover rounded-2xl"
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-5xl font-bold mt-16 mb-6 text-black">
                  {selectedBlog.name}
                </h2>
                <p className="text-lg mb-4 text-black">
                  {selectedBlog.description}
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
