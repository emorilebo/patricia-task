import React from 'react'

function SidebarRow({Icon, title}) {
    return (
        <div className="flex items-center space-x-1 p-2 mr-4 my-3 text-gray-400 hover:bg-yellow-200 hover:text-green-700 rounded-r-xl  cursor-pointer">
            <Icon className="h-7 w-7"/>
            <p className="hidden sm:inline-flex text-sm">{title}</p>
        </div>
    )
}

export default SidebarRow
