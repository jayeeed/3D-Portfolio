/* eslint-disable react/jsx-no-target-blank */

import { socialMediaLinks } from "../constants";

const Sidebar = () => {
  return (
    <div
      className="hidden lg:flex sm:flex fixed flex-col top-[30%] left-0 bg-transparent
     font-semibold text-gray-300 z-50"
    >
      <ul>
        {socialMediaLinks.map((link) => (
          <li
            key={link.name}
            className="w-[100px] h-[70px] ml-[-30px] flex justify-between items-center rounded-md transition-transform duration-500 ease-in-out hover:scale-150"
          >
            <a
              target="_blank"
              className="flex justify-between items-center w-full"
              href={link.url}
            >
              <span className="px-3"></span>
              <link.icon className="text-white-700" size={30} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
