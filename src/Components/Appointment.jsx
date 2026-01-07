import React from 'react'
import { Clock, Phone } from "lucide-react";


const Appointment = () => {
  return (
    <>
    {/* Appointment Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Book an Appointment Today</h2>
              <p className="text-blue-100 mb-6">
                Schedule your visit with our experienced medical professionals. We're here to help you maintain optimal health.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Clock size={24} />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p className="text-blue-100">Mon - Fri: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} />
                <div>
                  <p className="font-semibold">Emergency Line</p>
                  <p className="text-blue-100">+1 234 567 8900</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 text-gray-800">
              <h3 className="text-2xl font-bold mb-6">Request Appointment</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
                  <option>Select Department</option>
                  <option>General Medicine</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Orthopedics</option>
                </select>
                <textarea 
                  placeholder="Message" 
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
                <button 
                  onClick={(e) => e.preventDefault()}
                  className="w-full bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Appointment
