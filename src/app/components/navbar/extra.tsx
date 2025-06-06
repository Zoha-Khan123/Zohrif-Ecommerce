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
      <div className="flex items-center justify-between  w-full  h-24">
        <div className="font-bold text-xl"><h1>Zohrif</h1></div>
    
       
        <ul className="hidden gap-5 lg:gap-10 md:flex text-sm">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/signup">Sign Up</Link>
          </li>
          <li className="cursor-pointer flex justify-center items-center gap-2">
            <Link href="/categories">Categories</Link>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </li>
        </ul>

      

        <div className="flex justify-center items-center gap-4 ">
          <div className="searchbox flex justify-center items-center gap-4 rounded-sm bg-[#eee4e4] text-sm">
            <input
              type="text"
              className="border-none outline-none"
              placeholder="What are you looking for?"
            />
            <span className="text-black">
              <IoSearchOutline />
            </span>
          </div>
          <div>
            <div className="flex justify-center items-center gap-5">
              <CiHeart />
              <PiShoppingCart />
              <div>
                <div>
                  <MdOutlineAccountCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
 {
        toggle ? <IoMdClose className="z-10 block md:hidden cursor-pointer text-black" onClick={()=>setToggle(false)}/> : <FaBars className="z-10 block md:hidden cursor-pointer" onClick={()=>setToggle(true)}/>
      }
<br />

        
      {/* Responsive Navbar */}
      <div className={`w-[60%] h-screen fixed top-0 flex justify-center items-center gap-10 flex-col bg-white text-black font-bold  transition-all duration-500 ease-in-out ${toggle ? 'right-0' : 'right-[-100%]'}`}>
 <ul >
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/signup">Signup</Link>
          </li>
          <li className="cursor-pointer flex justify-center items-center gap-2">
            <Link href="/categories">Categories</Link>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </li>
        </ul>

        
          
        </div>
      </div>
     





    </>
  );
};

export default Navbar;
