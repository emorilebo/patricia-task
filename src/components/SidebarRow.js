import React from 'react'

function SidebarRow({Icon, title}) {
    return (
        <div className="flex items-center space-x-4 p-4 text-gray-500 hover:bg-yellow-200 hover:text-green-700 rounded-xl cursor-pointer">
            <Icon className="h-8 w-8"/>
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
