import { useState } from 'react';
import Navbar from './Components/Navbar';
import { Calendar, Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Menu, X, Award, Users, Stethoscope, Heart } from 'lucide-react';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Appointment from './Components/Appointment';
import Footer from './Components/Footer';
import News from './Components/News';

function MedicalWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <News/>
      <Appointment/>
      <Footer/>    
    </div>
  );
}

export default MedicalWebsite;