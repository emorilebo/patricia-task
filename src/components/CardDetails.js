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
    <div className="border-1 p-4 m-4 rounded-xl bg-gray-100">
      <div className="flex">
        <p className="cardDetailHolder">Card Balance:</p>
        <h3 className="cardDetailValue ml-20 text-green-900">{cardBalance}</h3>
        <div className="ml-64"></div>
        <button className="text-sm text-green-900 bg-white border-2 border-green-900 hover:border-4 hover:bg-green-900 hover:text-white ml-12 px-6 py-2 rounded-lg">
          Fund Card
        </button>
      </div>
      <div className="flex">
        <p className="cardDetailHolder">Name:</p>
        <h3 className="cardDetailValue pl-3 ml-28">{name}</h3>
      </div>

      <div className="flex">
        <p className="cardDetailHolder">Card Status:</p>
        <p className="cardDetailValue pl-3 ml-20">{cardStatus}</p>
      </div>
      <div className="flex">
        <p className="cardDetailHolder">Billing Address:</p>
        <p className="cardDetailValue ml-14 pl-3">{billingAddress}</p>
        <DuplicateIcon className="h-5 ml-1 mt-3 text-gray-400" />
      </div>
      <div className="flex">
        <p className="cardDetailHolder">Date Created:</p>
        <p className="cardDetailValue pl-3">{dateCreated}</p>
      </div>
    </div>
  );
}

export default CardDetails;
