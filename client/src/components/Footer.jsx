/* eslint-disable react/jsx-no-target-blank */

import { Link } from "react-router-dom";

import { socialMediaLinks } from "../constants";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer className="text-center bg-slate-900">
        <div className="lg:hidden pt-4 content-center">
          <div className="flex justify-center mb-4 w-full gap-2">
            {socialMediaLinks.map((link, index) => (
              <a key={index} target="_blank" className="mx-4" href={link.url}>
                <link.icon
                  className="text-white-700 rounded-md transition-transform transform hover:scale-125 active:scale-125"
                  size={25}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="text-gray-300 text-center pb-2 pt-1 text-xs bg-gray-900">
          &copy; {year} Copyright:
          <Link
            className="text-gray-400 description"
            to="/"
            onClick={scrollToTop}
          >
            &nbsp;Jayed
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
