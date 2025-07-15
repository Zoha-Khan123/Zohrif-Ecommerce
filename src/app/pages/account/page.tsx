import Button from "@/app/components/button/button";
import React from "react";

const Account = () => {
  return (
    <div className="p-4 md:p-10 space-y-10">
      {/* Breadcrumb Links */}
      <div className="flex justify-between text-sm">
        <div className="flex gap-2 text-gray-400 mb-6">
          <p className="cursor-pointer hover:text-black">Home</p>
          <p>/</p>
          <p className="text-black cursor-pointer">My Account</p>
        </div>
        <p>
          Welcome <span className="text-red">Md Rimel!</span>
        </p>
      </div>

      <div className="flex justify-between">


        {/* Sidebar */}
        <div className="w-[30%] hidden md:block">
            <h1>Manage My Account</h1>
            <ul className="ml-8 space-y-3 my-3">
                <li className="text-gray-400 hover:text-red cursor-pointer">My Profile</li>
                <li className="text-gray-400 hover:text-red cursor-pointer">Address Book</li>
                <li className="text-gray-400 hover:text-red cursor-pointer">My Payment Option</li>
            </ul>
            <h1>My Orders</h1>
            <ul  className="ml-8 space-y-2 my-2">
                <li className="text-gray-400 hover:text-red cursor-pointer">My Returns</li>
                <li className="text-gray-400 hover:text-red cursor-pointer">My Cancellation</li>
            </ul>
             <h1>My WhisList</h1>
        </div>



        {/* Account */}
        <div className="w-full md:w-[70%] bg-white shadow-sm rounded-md p-5 md:p-14 space-y-5">
        <h1 className="text-red font-bold">Edit Your Profile</h1>
        <form action="" className="space-y-8">

        <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* First Name */}
        <div className="flex-1">
            <label htmlFor="firstName" className="block font-medium">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="Md" className="mt-1 block w-full bg-light px-3 py-3" />
        </div>

        {/* Last Name */}
         <div className="flex-1">
            <label htmlFor="lastName" className="block font-medium">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Rimel" className="mt-1 block w-full bg-light px-3 py-3" />
        </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Email */}
        <div className="flex-1">
            <label htmlFor="email" className="block font-medium">Email</label>
            <input type="email" id="email" name="email" placeholder="rimel1111@gmail.com" className="mt-1 block w-full bg-light px-3 py-3" />
        </div>

        {/* Address */}
         <div className="flex-1">
            <label htmlFor="address" className="block font-medium">Address</label>
            <input type="text" id="address" name="address" placeholder="Kingston, 5236, United State" className="mt-1 block w-full bg-light px-3 py-3" />
        </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-4">
            <label htmlFor="password" className="block font-medium">Password Changes</label>
            <input type="currentPassword" id="currentPassword" name="currentPassword" placeholder="Current Password" className="mt-1 block w-full bg-light px-3 py-3" />
            <input type="newPassword" id="newPassword" name="newPassword" placeholder="New Password" className="mt-1 block w-full bg-light px-3 py-3" />
            <input type="confirmNewPassword" id="confirmNewPassword" name="confirmNewPassword" placeholder="Confirm New Password" className="mt-1 block w-full bg-light px-3 py-3" />
        </div>

       {/* Button */}
        <div className="flex justify-end items-center gap-4">
            <p className="cursor-pointer">Cancel</p>
          <Button customStyle="text-white py-3 px-8  bg-red hover:bg-red-500">
            Save Changes
          </Button>
        </div>
        </form>
        </div>

    </div>
      </div>

  );
};

export default Account;
