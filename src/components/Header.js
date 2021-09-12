import { ArrowCircleLeftIcon } from '@heroicons/react/solid'
import React from 'react'

function Header() {
    return (
        <div className="flex items-center p-8 border-b">
            <ArrowCircleLeftIcon className="h-6 text-gray-500 cursor-pointer hover:text-gray-300" />
            <h1 className="text-gray-400 ml-4 text-3xl text-bold cursor-pointer hover:text-gray-300 ">Cards</h1>
        </div>
        
    )
}

export default Header
