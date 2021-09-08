import { ArrowCircleDownIcon, PhotographIcon } from '@heroicons/react/solid'
import React from 'react'
import Header from './Header'

function MainSection() {
    return (
        <div>
            <Header/>
            <div className="flex flex-grow">
            <PhotographIcon className="h-10 rounded text-green-700 m-6 bg-green-100 p-3"/>
            <div>
                <div className="flex align-centre">
                <h1 className="text-3xl">Virtual Card</h1>
                <ArrowCircleDownIcon className="h-5 m-2" />
                </div>
                <p>Lorem Ipsum dolar sit amet</p>
            </div>
            <div >
                <p className="text-black-700 m-6 bg-yellow-400 px-6 py-2 rounded-xl">Create New Card</p>
            </div>
            </div>
        </div>
    )
}

export default MainSection
