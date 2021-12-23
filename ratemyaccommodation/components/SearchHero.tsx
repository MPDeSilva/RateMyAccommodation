import React from 'react'

const Search = () => {
  return (
  <div className="bg-uniSearch bg-cover bg-no-repeat">
  <div className="flex justify-center items-center mx-auto h-screen bg-cover bg-center">
    <div className="flex flex-col space-y-5">
      <p className="text-white font-bold text-5xl items-center">
      Find your ideal <span className="text-gray-800">Accommodation</span>
      </p>
      <p className="text-white font-semibold text-3xl text-center items-center">From <span className="text-gray-800">Students</span> who have reviewed it</p>
      <p className="text-white  font-semibold text-lg text-center items-center">From the <span className="text-gray-800">University</span> you are going to</p>
      <div className="flex flex-row items-center justify-center">
        <input type="text" placeholder="Univerisity, Area or Accommodation Name" className="p-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-3/4 rounded-md md:text-base text-sm" />
        <button className="p-4 text-l font-semibold bg-gray-800 hover:bg-gray-700 text-white rounded-md">Search</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Search
