import React from 'react'
import { Users, Stethoscope, Award, Heart } from "lucide-react";


const Hero = () => {
  return (
    <>
        {/* Hero Section */}
    <section id="home"
  className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://preview.colorlib.com/theme/drpro/images/home_slider.jpg')",
  }} >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">            
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Your Health Is Our <span className="text-blue-600">Top Priority</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Providing quality healthcare services with compassion and expertise. Our team of experienced doctors is dedicated to your wellbeing.
              </p>
              <div className="flex gap-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
                  Make Appointment
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="text-blue-600" size={48} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">1200+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Stethoscope className="text-blue-600" size={48} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Expert Doctors</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="text-blue-600" size={48} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="text-blue-600" size={48} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
      
  )
}

export default Hero
