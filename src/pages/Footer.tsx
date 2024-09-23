import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

// Import the Indian flag
import inFlag from 'assets/images/flags/in.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide modern solutions for digital businesses. Stay connected with our services and updates.
          </p>
        </div>

        {/* Section 2: Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#!" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="hover:text-white transition-colors">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="hover:text-white transition-colors">Services</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#!" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-white" />
            </a>
            <a href="#!" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-white" />
            </a>
            <a href="#!" aria-label="Linkedin">
              <Linkedin className="w-6 h-6 hover:text-white" />
            </a>
            <a href="#!" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-white" />
            </a>
            <a href="#!" aria-label="Youtube">
              <Youtube className="w-6 h-6 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Section 4: Language Selection (Only Indian Flag) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Language</h3>
          <div className="flex space-x-2">
            <img src={inFlag} alt="Indian" className="w-6 h-6 cursor-pointer hover:opacity-75" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} QVAC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
