import React from 'react'

const Header = () => {
  return (
  
    <div className="py-12 md:py-24">
        <div className="flex md:flex-row flex-col-reverse max-w-7xl">
    <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
      <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
        <h1 className="mb-2 text-3xl font-bold text-blue md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">The best way to write code all day</h1>
        <p className="mb-6 text-lg text-blue xl:text-xl lg:mb-8 xl:mb-10">For writers, a random sentence can help them get their creative juices flowing. Since the topic.</p>
        <div className="flex mb-6 space-x-4">
          <input type="text" placeholder="enter your email..." className="flex-1 px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none" />
          <button className="inline-block px-5 py-2 font-semibold text-blue rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">Get started</button>
        </div>
        <p className="text-sm text-blue">No credit card required. Cancel anytime.</p>
      </div>
      <div className="order-1 col-span-2 md:order-2 xl:col-span-3">
        <img src="/images/hero-image-dark.png" className="rounded-lg shadow-2xl" alt=""></img>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Header
