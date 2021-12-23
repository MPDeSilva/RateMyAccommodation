/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = ({ data }) => {
  return (
    <div className="flex flex-col-reverse md2:flex-row items-center justify-between mx-auto max-w-7xl h-full md:mb-0 mb-8">
      <div className="flex-1 px-4 xl:px-0 mx-auto max-w-7xl">
        <div className="flex flex-col">
          <div className="flex flex-row md:mt-8 mt-4 md:mb-8 mb-4">
          <h1 className="font-bold tracking-normal text-4xl md:text-6xl text-grey5">Find the best accommodation <span className="text-blue">without the hassle</span></h1>
          </div>
        </div>
        <div className="list-disc">
          <p className="font-normal md:leading-8 text-base md:text-lg text-gray-600 w-full my-0">Search for the right accommodation, with all the right information and right reviews, directly from the students who live in them.</p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:space-x-2 space-x-0 md:space-y-0 space-y-2 py-4 md:mr-1 items-center">
          <a className="w-full" href="" target="_blank" rel="noreferrer">
            <motion.button
              
              className="justify-center object-center text-center font-medium text-base rounded h-12 lg:w-60 w-full px-4 bg-blue text-white"
              whileHover={{ scale: 1.01, opacity: 0.8 }}
            >
              Button One
            </motion.button>
          </a>
          <a className="w-full" href="" target="_blank" rel="noreferrer">
            <motion.button
             
              className="justify-center object-center text-center font-medium text-base rounded h-12 lg:w-60 w-full px-4 bg-gray-800 text-white"
              whileHover={{ scale: 1.01, opacity: 0.8 }}
            >
              Button Two
            </motion.button>
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden md:flex hidden h-full w-full md:flex-1 mx-auto pr-0 max-w-7xl mb-0">
        <img
          className="h-full"
          src="/header.jpeg"
          alt=""
          width={808}
          height={682}
        />
      </div>
      <div className="relative overflow-hidden flex md:hidden h-full w-full mx-auto pr-0 max-w-7xl mb-0">
        <img
          src="/header.jpeg"
          alt=""
          width={808}
          height={682}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
