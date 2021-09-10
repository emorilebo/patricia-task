import { BellIcon, CalendarIcon, DotsVerticalIcon, SaveIcon } from "@heroicons/react/solid";
import React from "react";
import Avatar from "@material-ui/core/Avatar";

// const activities = [
//   { src: "/amazon.png", name: "Amazon", date: "Just now", price: "$377.23" },
//   {
//     src: "/domeremember-profile.jpg",
//     name: "Amazon",
//     date: "Just now",
//     price: "$377.23",
//   },
//   {
//     src: "/domeremember-profile.jpg",
//     name: "Amazon",
//     date: "Just now",
//     price: "$377.23",
//   },
//   {
//     src: "/amazon.png",
//     name: "Amazon",
//     date: "Just now",
//     price: "$377.23",
//   },
// ];

function Widget() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-end p-6 mb-10 ">
        <BellIcon className="h-6" />
        <div className="bottom-2 left-7 bg-red-400 h-2 w-2 rounded-full" />
        <Avatar />
        <DotsVerticalIcon className="h-6" />
      </div>
      <div className="bg-white m-3 rounded-md p-3 flex">
        <p className="pr-4 bold text-green-800">Recent Activity</p>
        <div className="flex bg-gray-100 px-3 py-1 rounded-xl">
            <CalendarIcon className="h-6 w-6 p-1 text-green-700"/>
            <p>Start date: 01/02/21</p>
        </div>
        <SaveIcon className="h-6 w-6 ml-4 text-gray-500"/>
      </div>
    </div>
  );
}

export default Widget;
