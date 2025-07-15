"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/button/button";
import Link from "next/link";
import { X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 650,
      quantity: 1,
      image: "/Gamepad.png",
    },
    {
      id: 2,
      name: "HAVIT HV-G92 Gamepad",
      price: 650,
      quantity: 1,
      image: "/Gamepad.png",
    },
  ]);

  const removeItem = (id: number): void => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // const subtotal = items.reduce(
  //   (sum: number, item: CartItem) => sum + item.price * item.quantity,
  //   0
  // );

  return (
    <div className="p-5 sm:p-10 my-5 sm:my-10">
      {/* Breadcrumb Links */}
      <div className="flex gap-2 text-gray-400 mb-6 text-sm">
        <Link href="/"> <p className="cursor-pointer hover:text-black">Home</p></Link>
        <p>/</p>
        <Link href="/pages/cart"><p className="text-black cursor-pointer">Cart</p></Link>
      </div>

      {/* Cart Items */}
      <div className="mb-8 space-y-4">
        {/* Desktop Table Headers */}
        <div className="hidden sm:grid grid-cols-5 bg-white rounded-lg shadow-sm p-8">
          <div className="font-medium col-span-2">Product</div>
          <div className="font-medium">Price</div>
          <div className="font-medium">Quantity</div>
          <div className="font-medium">Subtotal</div>
        </div>

        {/* Cart Items List */}
        {items.map((item: CartItem) => (
          <div
            key={item.id}
            className="bg-white sm:bg-transparent space-y-20  sm:p-0 rounded-lg sm:rounded-none border-gray-200 sm:border-b"
          >
            <div className="flex flex-col sm:grid sm:grid-cols-5 gap-4 p-4 rounded-lg shadow-sm">
              {/* Product Info - Centered on mobile */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left col-span-2">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 sm:mr-4 mb-2 sm:mb-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 64px, 80px"
                  />
                  {/* Delete button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors cursor-pointer"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <X size={16} />
                  </button>
                </div>
                <span className="font-medium line-clamp-2">
                  {item.name}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-center sm:justify-start">
                <span className="font-medium">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-center sm:justify-start">
                <div className="flex items-center border border-gray-200 rounded-md">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1  hover:bg-red hover:text-white cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x border-gray-200 w-10 text-center bg-white text-sm sm:text-base">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-red hover:text-white cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-center sm:justify-start">
                <span className="font-medium ">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between mb-12 gap-4">
        <Link href="/">
        <Button customStyle="text-black px-10 py-3 border-2 border-gray-400 font-bold hover:bg-red hover:text-white hover:border-none cursor-pointer">
         Return To Shop
        </Button>
        </Link> 
        <Button customStyle="text-black px-10 py-3 border-2 border-gray-400 font-bold hover:bg-red hover:text-white hover:border-none cursor-pointer">
          Update Cart
        </Button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Coupon */}
        <div className="flex flex-col sm:flex-row items-start gap-4 w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-300 px-4 sm:px-5 py-2 sm:py-3 rounded-lg w-full sm:w-[300px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <Button customStyle="text-white px-6 sm:px-8 py-3 bg-red hover:bg-red-500 text-sm sm:text-base transition-colors shadow-sm">
            Apply Coupon
          </Button>
        </div>

        {/* Cart Total */}
        <div className="border border-gray-200 rounded-lg w-full lg:w-[450px] p-6 space-y-4">
          <h1 className="font-bold text-lg">Cart Total</h1>
          <div className="flex justify-between">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-medium">$1750</p>
          </div>
          <div className="h-px bg-gray-200 w-full"></div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping</p>
            <p className="text-green-600">Free</p>
          </div>
          <div className="h-px bg-gray-200 w-full"></div>
          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>$1750</p>
          </div>
          <div className="flex justify-center items-center pt-2">
            <Link href="/pages/checkOut">
            <Button customStyle="text-white px-6 sm:px-10 py-3 bg-red hover:bg-red-500 text-sm sm:text-base transition-colors w-full shadow-sm">
              Proceed to Checkout
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
