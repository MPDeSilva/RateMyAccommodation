import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const Hero = ({ data }) => {
  return (
    <div className="flex flex-col-reverse md2:flex-row items-center justify-between mx-auto max-w-7xl h-full md:mb-0 mb-8">
      <div className="flex-1 md:my-24 px-4 md:mr-4 xl:px-0 mx-auto max-w-7xl">
        <div className="flex flex-col">
          <div className="flex flex-row md:mt-8 mt-4 md:mb-8 mb-4">
            <h1 className="font-bold tracking-normal text-4xl md:text-6xl text-grey5 w-full">Find the best accommodation <span className="text-blue">without the hassle</span></h1>
          </div>
        </div>
        <div className="list-disc">
          <p className="font-normal md:leading-8 text-base md:text-lg text-gray-600 w-full my-0">Search for the right accommodation, with all the right information and right reviews, directly from the students who live in them.</p>
        </div>
        <div className="flex flex-row space-x-0 py-4 items-center">
          <input type="text" placeholder="Univerisity, Area or Accommodation Name" className="border p-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-3/4 rounded-md text-sm" />
          <button className="items-center my-0 p-4 border text-sm font-semibold bg-gray-800 hover:bg-gray-700 text-white rounded-md w-1/4">Search</button>
        </div>
        <motion.div whileHover={{ scale: 1.01, translateX: 3 }}>
          <a
            href=""
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/Trustpilot.svg"
              alt=""
              width={240}
              height={30}
            />
          </a>
        </motion.div>
      </div>
      <div className="relative overflow-hidden md:inline-flex hidden  md:flex-2 mx-auto pr-0 max-w-7xl my-0">
        <Image
          src="/Header-Web.jpg"
          alt="Header"
          width={850}
          height={720}
          objectFit="fill"
        />
      </div>
      <div className="relative overflow-hidden inline-flex md:hidden h-full w-full mx-auto pr-0 max-w-7xl mb-0">
        <Image
          src="/Header-Mob.jpeg"
          alt="Header"
          width={808}
          height={682}
        />
      </div>
    </div>
  );
};

export default Hero;
