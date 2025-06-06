"use client"
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineAccountCircle } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <>
      {/* topbar */}
      <div className="topbar">
        <p>
          Carry Confidence with Zohrif Wallets Free Shipping + 50% Off for a
          Limited Time
        </p>
        <select className="selectbox">
          <option>English</option>
          <option>Urdu</option>
        </select>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div><h1 className="brandName">Zohrif</h1></div>

        <ul className="navLinks">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/signup">Signup</Link></li>
          <li className="categories">Categories <span><MdKeyboardArrowDown /></span></li>
        </ul>

      <div className="searchboxAndIcons">
        <div className="inputbox"><input type="text" placeholder="What are you looking for?"/><span><IoSearchOutline /></span></div>
        <div className="icons"><CiHeart /><PiShoppingCart /><div><MdOutlineAccountCircle /></div></div>
      </div>
      {
       toggle ? <IoMdClose className="close" onClick={()=>setToggle(false)}/> : <FaBars className="on" onClick={()=>setToggle(true)}/>
      }
      </div>

              
      {/* Responsive */}
        <ul className={`responsiveCategory ${toggle ? 'right-0' : 'right-[-100%]'}`}>
          <li>Home</li>
          <li>About</li>
          <li>Sign Up</li>
          <li className="categories">Categories <span><MdKeyboardArrowDown /></span></li>
        </ul>




    </>
  );
};

export default Navbar;
