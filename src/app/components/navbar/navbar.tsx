"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineAccountCircle } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { client } from "@/sanity/lib/client";

interface Category {
  title: string;
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [posts, setPosts] = useState<Category[]>([]);

  async function getPost() {
    const query = '*[_type == "category"]{title}';
    const posts = await client.fetch(query);
    setPosts(posts);
    console.log(posts);
  }
  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {/* Top-bar */}
      <div className="top-bar">
        <p>
          Carry Confidence with Zohrif Wallets Free Shipping + 50% Off for a
          Limited Time{" "}
        </p>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div>
          <h1 className="brand-name">Zohrif</h1>
        </div>

        <ul className="nav-links">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/auth/signup">Signup</Link>
          </li>

          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer text-[#5b5b5b]">
              Categories
              <span>
                <MdKeyboardArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
              </span>
            </div>

            {/* Wrap trigger + dropdown in the same group to maintain hover state */}
            <div className="absolute top-full left-0 w-full z-10">
              <ul className="hidden group-hover:block bg-white shadow-md rounded-md mt-2 min-w-[150px]">
                {posts.map((item) => (
                  <li
                    key={item.title}
                    className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Search box and icons */}
        <div className="searchbox-and-icons">
          <div className="input-box">
            <input type="text" placeholder="What are you looking for?" />
            <span>
              {" "}
              <IoSearchOutline />
            </span>
          </div>
          <div className="icons">
            <CiHeart />
            <PiShoppingCart />
            <div>
              <MdOutlineAccountCircle />
            </div>
          </div>
          {/* Icon wrapper */}
          <div className="icon-wrapper">
            {toggle ? (
              <IoMdClose onClick={() => setToggle(false)} />
            ) : (
              <FaBars onClick={() => setToggle(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <ul
        className={`responsive-category ${toggle ? "right-0" : "right-[-100%]"}`}
      >
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/about"> About</Link>
        </li>
        <li>
          <Link href="/auth/login"> Login</Link>
        </li>
        <li className="categories group relative">
          {/* Whole container: trigger + dropdown */}
          <div className="category-trigger flex items-center gap-1 cursor-pointer">
            Categories
            <span className="flex items-center">
              <MdKeyboardArrowDown className="transition-transform duration-200 group-hover:rotate-180 group-active:rotate-180" />
            </span>
          </div>

          {/* Dropdown list placed inside the same group (no flicker) */}
          <div className="absolute top-full left-0 z-10 min-w-[150px]">
            <ul className="dropdown-menu hidden group-hover:block group-active:block bg-white shadow-md rounded-md mt-2">
              {posts.map((item) => (
                <li
                  key={item.title}
                  className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 transition-colors cursor-pointer"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </li>

      </ul>

      <div className="w-full h-[1px] rounded-sm bg-gray-400"></div>
    </>
  );
};

export default Navbar;
