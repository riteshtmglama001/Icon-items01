import React, { Fragment } from "react";
import { IoLogoModelS } from "react-icons/io";
import { FaRegMessage, FaImage } from "react-icons/fa6";
import {
  FaSnowman,
  FaTrafficLight,
  FaCloud,
  FaMapMarkerAlt,
  FaInbox,
} from "react-icons/fa";
import { GiBullHorns } from "react-icons/gi";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { SiInternetcomputer } from "react-icons/si";

const Icon = (props) => {
  return (
    <div className={` h-[100vh] w-full flex items-center justify-center `}>
      <div className="flex flex-col">
        <div className="text-4xl  font-bold my-4 ">
          <h1>Category</h1>
        </div>
        <div
          className={`bg-white  gap-7 px-7 py-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 rounded-md`}
        >
          {Icons.map((Icon, index) => (
            <Fragment key={Icon.Name}>
              <div>
                {/* duration-200 ease-in-out */}
                <p className="cursor-pointer hover:translate-y-[-4px] transition-transform duration-200 ease-in-out hover:bg-slate-200 w-max p-2 rounded-md  "> {Icon.item}</p>
                <p className="text-xl text-black cursor-pointer hover:translate-y-[3px] ">{Icon.Name}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icon;
const Icons = [
  {
    item: <IoLogoModelS size={70} className="text-gray-700" />,
    Name: "Car Models",
  },

  {
    item: <FaRegMessage size={70} className="text-blue-700" />,
    Name: "Message",
  },
  {
    item: <FaSnowman size={70} className="text-gray-300" />,
    Name: "Snowman",
  },
  {
    item: <GiBullHorns size={70} className="text-black" />,
    Name: "Bullhorns",
  },
  {
    item: <FaCloud size={70} className="text-blue-100" />,
    Name: "Cloud",
  },
  {
    item: <MdOutlineAirplanemodeActive size={70} className="text-blue-400" />,
    Name: "Aeroplane",
  },
  {
    item: <FaTrafficLight size={70} className="text-amber-900" />,
    Name: "Traffic Light",
  },
  {
    item: <CiSearch size={70} className="text-yellow-700" />,
    Name: "Search",
  },
  {
    item: <FaMapMarkerAlt size={70} className="text-green-500" />,
    Name: "Map Marker",
  },
  {
    item: <FaImage size={70} className="text-red-500" />,
    Name: "Image",
  },
  {
    item: <FaInbox size={70} className="text-yellow-600" />,
    Name: "Inbox",
  },
  {
    item: <SiInternetcomputer size={70} className="text-blue-900" />,
    Name: "Internet Computer",
  },
];
