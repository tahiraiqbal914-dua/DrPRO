import React, {useState} from 'react'

const Navbar = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  return (
    <>
    {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">📞</span>
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">✉️</span>
              <span>info@drpro.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="cursor-pointer hover:opacity-80">📘</span>
            <span className="cursor-pointer hover:opacity-80">🐦</span>
            <span className="cursor-pointer hover:opacity-80">📷</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              Dr<span className="text-gray-800">PRO</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>              
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                Book Appointment
              </button>
            </div>

        {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-gray-800"
                onClick={toggleMobileMenu}>
                <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>

        {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>              
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-red-600 text-white px-6 py-2 rounded-full mt-2">
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
