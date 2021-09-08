import { ArrowCircleLeftIcon } from '@heroicons/react/solid'
import React from 'react'

function Header() {
    return (
        <div className="flex m-6 align-center">
            <ArrowCircleLeftIcon className="h-6 text-gray-700" />
            <h1 className="text-gray-500 ml-6 text-3xl text-bold">Cards</h1>
            <div className="border-6"/>
        </div>
        
    )
}

export default Header
