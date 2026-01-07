import React from 'react'
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
    {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr<span className="text-blue-600">Pro</span></h3>
              <p className="text-gray-400">
                Providing quality healthcare services with compassion and expertise since 1998.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Doctors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Emergency Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Cardiology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Pediatrics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600">Orthopedics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin size={18} />
                  <span>123 Medical Street, Healthcare City, HC 12345</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>+1 234 567 8900</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>info@drpro.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DrPro Medical Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
