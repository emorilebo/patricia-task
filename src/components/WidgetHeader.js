import { BellIcon, DotsVerticalIcon } from '@heroicons/react/solid'
import React from 'react'

function WidgetHeader() {
    return (
        <div>
            <div className="flex items-center justify-end p-6  mb-10 ">
        <div class="bg-white rounded-md mx-3  relative inline-block cursor-pointer hover:bg-white hover:border-green-300 hover:border-4">
          <BellIcon className="h-6 text-black" />
          <span class="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 border-2 border-white rounded-full "></span>
        </div>
        <img
          class="inline-block bg-white shadow-md rounded object-cover w-6 h-6 cursor-pointer hover:bg-white hover:border-green-300 hover:border-4 hover:shadow-md"
          src="/avatarsrc.png"
          alt="profile"
        />
        <DotsVerticalIcon className="h-6 hover:opacity-100 cursor-pointer" />
      </div>
        </div>
    )
}

export default WidgetHeader
