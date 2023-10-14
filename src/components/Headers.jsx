import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { SlMenu } from 'react-icons/sl'
import { FaTimes } from 'react-icons/fa'

const navlinks = [
    {
        title: 'Home',
        Url: ''
    },
    {
        title: 'About us',
        Url: ''
    },
    {
        title: 'Services',
        Url: ''
    },
    {
        title: 'Contact',
        Url: ''
    },
    {
        title: 'Portfolio',
        Url: ''
    },
]

const Headers = () => {
    const [view, setView] = useState(false)
    const Icon = view ? FaTimes : SlMenu
    return (
        <div className=' bg-slate-100 shadow-md relative z-10'>
            <div className='flex items-center justify-between w-[90%] mx-auto py-2 md:py-0'>
                <div className="flex items-center gap-1">
                    <img className="w-10 md:w-[4.5rem] " src={logo} alt="" />
                    <div className="font-semibold text-blue-600 text-sm md:text-xl lg:text-2xl italic ">melody <span className='text-orange-400'>trails</span></div>
                </div>
                <div className="hidden md:flex  font-semibold items-center gap-2 cursor-pointer capitalize">
                    {navlinks.map((item, index) => (
                        <div key={index} className="hover:text-white text-sm md:text-lg  px-3 hover:px-4 hover:py-2 hover:bg-orange-400 rounded-md transition-all">{item.title}</div>
                    ))}
                </div>
                <div className="md:hidden">
                    <Icon className='cursor-pointer  overflow-y-hidden ' onClick={() => setView(!view)} />
                </div>
            </div>
            {view === true && <div className="md:hidden">
                <div className="pt-10 flex flex-col items-start">
                    {navlinks.map((item, index) => (
                        <div key={index} className="py-3 px-4 capitalize font-medium cursor-pointer hover:bg-orange-400 rounded-md transition-all hover:text-orange-100 hover:shadow-xl">{item.title}</div>
                    ))}
                </div>
            </div>}

        </div>
    )
}

export default Headers