/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TestomonialBanner = () => {
  return (
    <>
    <div className="flex justify-center items-center w-screen h-full bg-gray-800">
      <div className="container px-4 mx-auto my-10 md:pb-16 max-w-5xl">
        <div className="w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
          <img alt="Card" src="https://i1.wp.com/blogs.qub.ac.uk/healthcarelibrary/wp-content/uploads/sites/7/2018/10/woman-801872_960_720.jpg?fit=960%2C644&ssl=1" className="max-w-full rounded-lg shadow-lg"/>
        </div>
        <div className="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-blue-800 rounded-2xl">
          <div className="flex flex-col text-white">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/></svg>
            </div>
            <p className="text-white my-5 px-2">
                    This website changed my life, I felt lost and afraid, I was petrified, trying to find good accommodation that met all of my personal requirements, but when I discovered RateMyAccommodation.org, I found found a place I could call a home away from home.
            </p>
            <div className="flex justify-between pl-2">
              <h3 className="font-bold text-2xl">Minali Ranasinghe</h3>
              <i className="fas fa-quote-right text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default TestomonialBanner
