/* eslint-disable react/jsx-no-target-blank */

import { socialMediaLinks } from "../constants";

const Sidebar = () => {
  return (
    <div
      className="hidden lg:flex sm:flex fixed flex-col top-[30%] left-0 bg-transparent
     font-semibold text-gray-300 z-50"
    >
      <ul className="space-y-8">
        {socialMediaLinks.map((link) => (
          <li
            key={link.name}
            className="w-[160px] h-[30px] flex justify-between items-center ml-[-100px] px-4 rounded-md transition-transform duration-700 transform hover:scale-150 active:scale-150"
          >
            <a
              target="_blank"
              className="flex justify-between items-center w-full"
              href={link.url}
            >
              <span className="px-3"></span>
              <link.icon className="text-white-700" size={25} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
