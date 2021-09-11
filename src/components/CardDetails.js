import { DuplicateIcon } from "@heroicons/react/solid";
import React from "react";

function CardDetails({
  cardBalance,
  name,
  cardStatus,
  billingAddress,
  dateCreated,
}) {
  return (
    <div className="border-1 p-3 mx-5 rounded-xl bg-gray-100">
      <div className="flex justify-between w-full">
        <div className="flex justify-between">
        <p className="cardDetailHolder mr-12">Card Balance:</p>
        <h3 className="cardDetailValue text-green-900">{cardBalance}</h3>
        </div>
        <button className="text-sm text-green-900 bg-white border-2 border-green-900 hover:border-4 hover:bg-green-900 hover:text-white px-6 py-2 rounded-lg">
          Fund Card
        </button>
      </div>
      <div className="flex">
        <p className="cardDetailHolder mr-20">Name:</p>
        <h3 className="cardDetailValue pl-3 ">{name}</h3>
      </div>

      <div className="flex ">
        <p className="cardDetailHolder mr-12">Card Status:</p>
        <p className="cardDetailValue pl-3">{cardStatus}</p>
      </div>
      <div className="flex">
        <p className="cardDetailHolder mr-8">Billing Address:</p>
        <p className="cardDetailValue pl-2">{billingAddress}</p>
        <DuplicateIcon className="h-5 ml-1 mt-3 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
      <div className="flex">
        <p className="cardDetailHolder mr-8">Date Created:</p>
        <p className="cardDetailValue pl-4">{dateCreated}</p>
      </div>
    </div>
  );
}

export default CardDetails;
