import React from 'react'

const Services = () => {
  return (
    <>
    {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of medical services to meet your healthcare needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'General Medicine', desc: 'Comprehensive primary care services for all ages', icon: '🩺' },
              { title: 'Cardiology', desc: 'Expert heart care and cardiovascular treatment', icon: '❤️' },
              { title: 'Pediatrics', desc: 'Specialized care for infants, children, and adolescents', icon: '👶' },
              { title: 'Orthopedics', desc: 'Treatment for bones, joints, and muscular issues', icon: '🦴' },
              { title: 'Neurology', desc: 'Advanced neurological diagnosis and treatment', icon: '🧠' },
              { title: 'Emergency Care', desc: '24/7 emergency medical services', icon: '🚑' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
