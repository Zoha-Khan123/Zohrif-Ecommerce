"use client";
import React from "react";
import Image from "next/image"
import { AuthFormProps } from "@/app/types/types";
import Button from "../button/button";
import Link from "next/link";


const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subtitle,
  mainButtonLabel,
  showGoogle,
  showForgot,
  imageSrc,
  imageAlt = 'Auth Image',
  showNameField,
  redirectText,
  redirectLinkLabel,
  redirectPath,
}) => {
  return (
   <div className="my-8 flex justify-around gap-16 items-center md:pr-20 min-h-[calc(100vh-120px)]">

    {/* Left Side */}
    <div className="hidden md:flex w-[60%]  justify-start">
      <Image src={imageSrc} alt={imageAlt} width={300} height={300} className="w-full h-[500px]"/>
    </div>


    {/* Right Side */}
    <div className="flex flex-col p-10 md:p-0 w-full md:w-[40%] space-y-4">
      <div className="mb-6 space-y-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{subtitle}</p>
      </div>
      <div className="flex flex-col w-full space-y-7 mb-6">
      {showNameField && (
      <input type="text" placeholder="Name" className="outline-none border-b-gray-400 border-b-1"/>
      )}
      <input type="email" placeholder="Enter Email" className="outline-none border-b-gray-400 border-b-1"/>
      <input type="password" placeholder="Password" className="outline-none border-b-gray-400 border-b-1"/>
      
      </div>
      <Button customStyle="w-full  text-white p-4 bg-red">{mainButtonLabel}</Button>


      {showForgot && (
          <div className="text-right">
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        )}

         {showGoogle && (
          <Button customStyle="w-full border p-4 rounded flex justify-center items-center gap-2">
            <Image src="/google-icon.png" alt="Google" width={100} height={100} className="h-5 w-5" />
            Sign up with Google
          </Button>)}

           <p className="text-gray-600 text-sm flex gap-2 justify-center items-center mt-4">
            {redirectText}{' '}
            <Link href={redirectPath} className="border-b-2 border-b-gray-600">
              {redirectLinkLabel}
            </Link>
          </p>  
    </div>


   </div>
  );
};


export default AuthForm;
