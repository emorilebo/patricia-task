import { CalendarIcon, SaveIcon } from "@heroicons/react/solid";
import React from "react";

function ActivityHeading() {
  return (
      <div className="flex">
        <p className="pr-4 font-bold text-sm text-gray-500">Recent Activity</p>
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-xl hover:bg-gray-300">
          <CalendarIcon className="h-6 w-6 p-1 text-green-700 hover:text-green-600 cursor-pointer" />
          <p className="text-gray-500 text-sm">Start date: 01/02/21</p>
        </div>
        <SaveIcon className="h-6 w-6 ml-2 cursor-pointer hover:text-gray-300 text-gray-500" />
      </div>
    
  );
}

export default ActivityHeading;
