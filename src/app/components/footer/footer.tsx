import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1 - Exclusive */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Exclusive</h1>
          <p className="text-sm">Subscribe</p>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded  p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm outline-none flex-1"
            />
            <button className="text-white"><BiRightArrow /></button>
          </div>
        </div>

        {/* Column 2 - Support */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Column 3 - Account */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Account</h1>
          <ul className="space-y-5 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Column 4 - Quick Links */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Quick Link</h1>
          <ul className="space-y-5 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 5 - Download App */}
          <div className="flex flex-col  gap-4 text-white text-xl ">
          <h1 className="text-lg font-bold">Social Links</h1>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

      {/* Footer Bottom */}
      <div className="text-center text-[#3b3b3b] mt-10 border-t border-[#3b3b3b] pt-4">
        © Copyright Zohrif {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
