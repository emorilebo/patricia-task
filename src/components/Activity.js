import React from "react";

function Activity({ imageUrl, name, date, amount }) {
  return (
    <div className="flex items-center px-1 cursor-pointer rounded-lg hover:bg-gray-300">
      <img src={imageUrl} className="h-10 w-10 rounded-md" alt="" />
      <div className="flex justify-between w-full py-3">
        <div className="pl-3">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
        <p className="hidden lg:inline-flex justify-end text-gray-500 text-sm">{amount}</p>
      </div>
      
    </div>
  );
}

export default Activity;
