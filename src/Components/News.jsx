import React from 'react'

const News = () => {
  return (
    <>
    <section id="home" className="relative bg-cover bg-center bg-no-repeat py-20"
     style={{
        backgroundImage:"url('https://vid.alarabiya.net/images/2014/08/04/e71bdc5f-08e3-4770-9357-e0b9ff2b9598/e71bdc5f-08e3-4770-9357-e0b9ff2b9598_16x9_1200x676.jpg?width=720')"}}>
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Promo Card (LEFT) */}
        <div className="bg-white shadow-2xl rounded-lg p-10">
          
          <p className="text-3xl font-bold text-teal-500">
            30<span className="text-2xl align-top">%</span>
            <span className="text-gray-500 text-lg font-medium ml-2">
              Discount
            </span>
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Only in <br /> August
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Nulla facilisi. Nulla egestas vel lacus sed interdum.
            Sed mollis, orci elementum eleifend tempor, nunc libero
            porttitor tellus.
          </p>

          <button className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default News
