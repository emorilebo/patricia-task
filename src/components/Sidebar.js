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
    <div className="h-screen mt-5 p-5 border-r">
      <div>
        <img
          src="/patricia-logo.png"
          className="h-5 mt-2 ml-5 mb-10 cursor-pointer"
          alt="logo"
        />
      </div>
      <div className="flex-row justify-between h-screen">
        <div clasName="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
          <SidebarRow Icon={ViewGridIcon} title="Dashboard" />
          <SidebarRow Icon={PresentationChartLineIcon} title="Activity" />
          <SidebarRow Icon={CreditCardIcon} title="Wallet" />
          <SidebarRow Icon={CubeIcon} title="Products" />
          <SidebarRow Icon={GiftIcon} title="Referrals" />
        </div>
        <div className="">
          <SidebarRow Icon={QuestionMarkCircleIcon} title="Help Center" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
