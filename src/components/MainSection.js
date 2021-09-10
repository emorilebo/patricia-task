import { ArrowCircleDownIcon, PhotographIcon } from "@heroicons/react/solid";
import React from "react";
import CardDetails from "./CardDetails";
import Header from "./Header";

function MainSection() {
  return (
    <div>
      <Header />
      <div className="flex items-center">
        <PhotographIcon className="h-10 rounded-md text-green-900 m-6 bg-green-100 p-3" />
        
        <div className="flex items-center">
          <div>
              <div className="flex align-centre">
              <h1 className="text-xl text-black font-semibold">Virtual Card</h1>
              <ArrowCircleDownIcon className="h-4 w-4 mt-2 ml-2 text-gray-400" />
              </div>
              <p className="text-gray-400">Lorem Ipsum dolar sit amet</p>
          </div>
          <div className="p-10 mx-12">

          </div>
          <button className="text-black-700 ml-12  bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-xl">
            Create New Card
          </button>
        </div>
      </div>
      <div className="flex">
        <img
          src="/card.png"
          className="ml-5 mt-6 mb-6 cursor-pointer"
          alt="atmcard"
        />
        <img
          src="/blur.png"
          className="mt-5 p-4 pl-5 ml-5 mb-10 cursor-pointer"
          alt="blur card"
        />
      </div>
      <div className="mt">
        <button className="text-green-900  ml-5 border-green-800 border-2 px-6 py-2 rounded-xl">
          Freeze Card
        </button>
        <button className="text-red-700 mb-6 ml-10 border-red-800 bg-tranparent-400 border-2 px-6 py-2 rounded-xl">
          Delete Card
        </button>
      </div>
      <div className="ml-4">
      
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
