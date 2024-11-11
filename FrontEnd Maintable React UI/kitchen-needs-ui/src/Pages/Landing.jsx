import React from 'react';
import Navbar from '../Components/Navbar';
import { FaInstagram } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import LoginForm from '../Components/LoginForm';
import Footer from '../Components/Footer';

function Landing() {
  return (
    <>
      <Navbar />
      <div className="w-screen min-h-screen flex flex-col md:flex-row text-fontColor">
        {/* Site description area */}
        <div className="bg-Accent w-full md:w-2/5 flex flex-col justify-center items-center p-6 md:p-0 md:min-h-screen z-50">
          <div className="font-Poppins font-bold text-center md:text-left">
            <h2 className="text-2xl mb-2">One Stop For All Your</h2>
            <h1 className="text-4xl md:text-6xl mb-4">Kitchen Needs</h1>
            <div className="h-1 bg-fontColor w-3/4 mt-5 mx-auto md:mx-0"></div>
          </div>
          <div className="w-full md:w-11/12 py-5 px-4 md:pl-12 mt-8 text-lg leading-7 bg-slate-50 rounded-r-full md:mr-auto">
            <p className="text-xl text-balance leading-7 font-Poppins font-semibold">
              The Ultimate Source for <span className="text-Accent">Kitchen Needs and Premium Milk</span> – Keeping Hotels and Homes Ready to Serve with <span className="text-Accent">Quality & Convenience</span>.
            </p>
          </div>
          <div className="flex flex-row text-2xl md:text-3xl gap-6 my-2 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <SiWhatsapp />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaSquareXTwitter />
            </a>
          </div>
          <p className="text-lg mt-4">Reach Out To Us Here!</p>
        </div>

        {/* Login form area */}
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-6 md:p-0">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
