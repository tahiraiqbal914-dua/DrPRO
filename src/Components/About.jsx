import React from 'react'

const About = () => {
  return (
    <>
    {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://preview.colorlib.com/theme/drpro/images/why_1.jpg" 
                alt="Medical team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome to <span className="text-blue-600">DrPro Medical Center</span>
              </h2>
              <p className="text-gray-600 mb-6">
                With over 25 years of experience, we provide comprehensive healthcare services with state-of-the-art facilities and a team of highly qualified medical professionals.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to provide compassionate, accessible, high-quality healthcare to our community. We combine advanced medical technology with personalized care to ensure the best outcomes for our patients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 Emergency Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Experienced Medical Staff</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Modern Equipment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Patient-Centered Care</span>
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
