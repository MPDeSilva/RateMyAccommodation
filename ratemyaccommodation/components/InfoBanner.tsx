/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const InfoBanner = () => {
  return (
    <div className="bg-blue-600">
      <div className="flex md:flex-row flex-col mx-auto justify-center items-center max-w-7xl my-8 md:divide-x-2 md:space-y-0 space-y-4">
        <div className="flex flex-1 flex-col mx-auto justify-center items-center">
          <h1 className="text-white text-3xl text-center font-semibold">Finding an accommodation shouldn't be hard</h1>
        </div>
        <div className="flex flex-1 flex-col mx-8 justify-center items-center space-y-4">
        <h1 className="text-white text-base text-center font-light">Hate going through tons of university & estate agents sites just to find the right one?</h1>
          <h1 className="text-white text-base text-center font-light">We help by analysing heaps of univeristy property data and allowing you to easily make you decision.</h1>
        </div>
      </div>
    </div>
  )
}

export default InfoBanner