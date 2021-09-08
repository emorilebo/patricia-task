import React from 'react'
import { ViewGridIcon, CreditCardIcon, GiftIcon, PresentationChartLineIcon, CubeIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="mt-18">
            <div>
                <img src="/patricia-logo.png" className="h-6 mt-5 ml-5 mb-10 cursor-pointer" alt="logo" />
            </div>
            <div clasName="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
                <SidebarRow Icon={ViewGridIcon} title="Dashboard" />
                <SidebarRow Icon={PresentationChartLineIcon}title="Activity" />
                <SidebarRow Icon={CreditCardIcon} title="Wallet" />
                <SidebarRow Icon={CubeIcon} title="Products" />
                <SidebarRow Icon={GiftIcon} title="Referrals" />
            </div>
            <div className="flex justify-centre">
                <SidebarRow Icon={QuestionMarkCircleIcon} title="Help Center" />
            </div>

        </div>
    )
}

export default Sidebar
