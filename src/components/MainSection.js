import { ArrowCircleDownIcon, PhotographIcon } from "@heroicons/react/solid";
import React from "react";
import CardDetails from "./CardDetails";
import Header from "./Header";

function MainSection() {
  return (
    <div>
      <Header />
      <div className="flex items-center">
        <PhotographIcon className="h-10 rounded-md text-green-900 m-6 bg-green-100 p-3 cursor-pointer" />
        
        <div className="flex md:flex-row justify-between w-full items-center cursor-pointer">
          <div>
              <div className="flex align-centre">
              <h1 className="text-xl text-black font-semibold hover:text-green-800 md:hidden lg:inline-flex lg:text-base">Virtual Card</h1>
              <ArrowCircleDownIcon className="h-4 w-4 mt-2 ml-2 text-gray-400 hover:text-gray-300" />
              </div>
              <p className="text-xs md:hidden lg:inline-flex lg:text-base text-gray-400">Lorem Ipsum dolar sit amet</p>
          </div>
          
          <button className="text-xs  text-black-700 mr-8  bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-xl">
            Create New Card
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="/card.png"
          className="ml-4 mb-10 cursor-pointer outline-none"
          alt="atmcard"
        />
        <img
          src="/blur.png"
          className="h-32 lg:inline-flex lg:h-1/2 mt-1 p-3 pl-5 ml-4 mb-10 cursor-pointer"
          alt="blur card"
        />
      </div>
      <div className="-mt-6 lg:inline-flex">
        <button className="text-green-900 hover:bg-green-700 hover:text-white  mb-6 ml-5 border-green-800 bg-tranparent-400 border-2 px-6 py-2 rounded-xl">
          Freeze Card
        </button>
        <button className="text-red-700 hover:bg-red-700 hover:text-white  mb-6 ml-10 border-red-800 bg-tranparent-400 border-2 px-6 py-2 rounded-xl">
          Delete Card
        </button>
      </div>
      <div className="">
      
        <CardDetails
            cardBalance="$3000.73"
            name="Netflix Card"
            cardStatus="Active"
            billingAddress="Patricia HQ, SA 109827"
            dateCreated="March 3rd 2020, 9:48:36 am"
        />
      </div>
    </div>
  );
}

export default MainSection;
