import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = (props) => {
  return (
    <div>
      <div className="flex gap-3  text-gray-700 hover:text-gray-400">
        <button
          className=" hover:border border-red-700 rounded-md"
          onClick={props.toggleMode}
        >
          <MdOutlineDarkMode size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
