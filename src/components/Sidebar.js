import React from "react";
import {
  ViewGridIcon,
  CreditCardIcon,
  GiftIcon,
  PresentationChartLineIcon,
  CubeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="lg:flex-row h-full justify-between my-5 px-5 border-r">
      <img
        src="/patricia-logo.png"
        className="h-12 mx-auto lg:h-6  mt-4 mb-16 cursor-pointer object-contain"
        alt="logo"
      />

      <div className="">
        <div className="flex mx-auto md:inline-block">
          <SidebarRow Icon={ViewGridIcon} title="Dashboard" />

          <div class="bg-white rounded-md relative inline-block">
            <SidebarRow Icon={PresentationChartLineIcon} title="Activity" />
            <span class="absolute top-5 left-7 inline-block w-2 h-2 bg-gray-600 border-2 border-white rounded-full"></span>
          </div>
          <SidebarRow Icon={CreditCardIcon} title="Wallet" />
          <SidebarRow Icon={CubeIcon} title="Products" />
          <SidebarRow Icon={GiftIcon} title="Referrals" />
        </div>
        <div className="hidden md:flex  items-center p-3 mt-64 h-4 cursor-pointer hover:bg-gray-200 rounded-md hover:text-gray-100">
          <QuestionMarkCircleIcon className="text-gray-500 hover:text-gray-100 h-4 p" />
          <p className="text-sm pl-2 text-gray-500">Help Centre</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
