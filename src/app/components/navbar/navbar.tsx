"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineAccountCircle } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* Top-bar */}
      <div className="top-bar">
        <p>Carry Confidence with Zohrif Wallets Free Shipping + 50% Off for a Limited Time </p>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div><h1 className="brand-name">Zohrif</h1></div>

        <ul className="nav-links">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/auth/signup">Signup</Link></li>
          <li className="categories">Categories<span><MdKeyboardArrowDown /></span></li>
        </ul>

        {/* Search box and icons */}
        <div className="searchbox-and-icons">
          <div className="input-box"><input type="text" placeholder="What are you looking for?" /><span> <IoSearchOutline /></span></div>
          <div className="icons">
          <CiHeart /><PiShoppingCart />
          <div><MdOutlineAccountCircle /></div>
          </div>
        {/* Icon wrapper */}
        <div className="icon-wrapper">
          {toggle ? (<IoMdClose onClick={() => setToggle(false)} />) : (<FaBars onClick={() => setToggle(true)} />)}
        </div>
        </div>


      </div>

      {/* Responsive */}
      <ul className={`responsive-category ${toggle ? "right-0" : "right-[-100%]"}`}>
        <li><Link href="/"> Home</Link></li>
        <li><Link href="/about"> About</Link></li>
        <li><Link href="/auth/login"> Login</Link></li>
        <li className="categories">Categories <span> <MdKeyboardArrowDown /></span></li>
      </ul>

       <div className="w-full h-[1px] rounded-sm bg-gray-400"></div>
    </>
  );
};

export default Navbar;