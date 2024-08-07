/* eslint-disable react-refresh/only-export-components */
import { SectionWrapper } from "../hoc";

const Blogs = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default SectionWrapper(Blogs, "blogs");
