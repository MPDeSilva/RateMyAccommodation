import { motion } from 'framer-motion'
import { Link } from 'prismic-reactjs'
import React from 'react'

const MostHero = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col mx-auto justify-center items-center max-w-7xl my-8 md:space-y-0 space-y-4">
        <div className="flex flex-1 flex-col mx-auto justify-center items-center">
          <h1 className="text-white text-3xl text-center font-semibold">Most Reviewed Universities</h1>
        </div>
        <div className="flex flex-1 flex-col mx-8 justify-center items-center space-y-4">
        <h1 className="text-white text-base text-center font-light">List of Universites will be coming soon, Spring 2022</h1>        
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl pb-16 px-4 mx-auto justify-center items-center">
      <motion.div
         
              className={`rounded-lg mt-8 md:mx-2 w-full md:w-1/2 shadow-custom transform transition bg-white`}
            >
              <div className="flex flex-col items-center rounded-lg overflow-hidden">
                <img
                  src={"Cambridge.jpeg"}
                  alt={""}
                  width={450}
                  height={300}
                />

                <div className={"px-8 pb-3 pt-6 text-center text-black"}>
                  <h3 className="text-2xl font-semibold" style={{ marginTop: 0 }}>
                    Cambridge University
                  </h3>
                  <h4 className="font-normal text-base text-gray-500 mt-0">
                    XX Reviews
                  </h4>
                </div>
              </div>
            </motion.div>
            <motion.div
         
              className={`rounded-lg mt-8 md:mx-2 w-full md:w-1/2 shadow-custom transform transition bg-white`}
            >
              <div className="flex flex-col items-center rounded-lg overflow-hidden">
                <img
                  src={"Oxford.jpeg"}
                  alt={""}
                  width={450}
                  height={300}
                />

                <div className={"px-8 pb-3 pt-6 text-center text-black"}>
                  <h3 className="text-2xl font-semibold" style={{ marginTop: 0 }}>
                    Oxford University
                  </h3>
                  <h4 className="font-normal text-base text-gray-500 mt-0">
                    XX Reviews
                  </h4>
                </div>
              </div>
            </motion.div>
            <motion.div
         
              className={`rounded-lg mt-8 md:mx-2 w-full md:w-1/2 shadow-custom transform transition bg-white`}
            >
              <div className="flex flex-col items-center rounded-lg overflow-hidden">
                <img
                  src={"Coventry.jpeg"}
                  alt={""}
                  width={450}
                  height={300}
                />

                <div className={"px-8 pb-3 pt-6 text-left text-black"}>
                  <h3 className="text-2xl font-semibold" style={{ marginTop: 0 }}>
                    Coventry University
                  </h3>
                  <h4 className="font-normal text-base text-gray-500 mt-0">
                    XX Reviews
                  </h4>
                </div>
              </div>
            </motion.div>
      </div>
    </div>
  )
}

export default MostHero
