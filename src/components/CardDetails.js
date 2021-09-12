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
    <div className="flex-row lg:flex  items-start justify-between border-1 p-3 mx-5 rounded-xl bg-gray-100">
    
     <table className="table-fixed">
     
        <tbody className="">
          <tr className="">
            <td className="cardDetailHolder">Card Balance:</td>
            <td className="cardDetailValue">{cardBalance}</td>
            
          </tr>
          <tr>
            <td className="cardDetailHolder">Name:</td>
            <td className="cardDetailValue">{name}</td>
          </tr>
          <tr>
            <td className="cardDetailHolder">Card Status:</td>
            <td className="cardDetailValue">{cardStatus}</td>
          </tr>
          <tr>
            <td className="cardDetailHolder">Billing Address:</td>
            <td className="cardDetailValue">{billingAddress}</td>
            <td>
              <DuplicateIcon className="h-5 -ml-7 mt-2 text-gray-400 cursor-pointer hover:text-gray-600" />
            </td>
          </tr>
          <tr>
            <td className="cardDetailHolder">Date Created:</td>
            <td className="cardDetailValue">{dateCreated}</td>
          </tr>
        </tbody>
      </table>
     
      <button className="flex-grow-0 justify-between h-contain text-xs lg:text-sm text-green-900 bg-white border-2 border-green-900 hover:bg-green-900 hover:text-white px-4 py-2 rounded-lg">
        Fund Card
      </button>
    </div>
  );
}

export default CardDetails;
