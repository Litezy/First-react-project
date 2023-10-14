import React from 'react'
import bannerphoto from '../assets/images/img3.png'

const Banner = () => {
    return (
        <div className='relative'>
            <div className="bg-slate-200/80 sm:-top-35  md:-right-20 w-[100vw] md:w-[50vw] h-[90vh] rounded-full absolute -top-20 "></div>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 mx-auto relative">
                <div className="">
                    <img className='w-4/4 md:w-3/4 rotat mt-16 mx-auto' src={bannerphoto} alt="" />
                </div>
                <div className="sm:mt-8 w-4/4 mx-auto flex flex-col items-center">
                    <div className="text-center font-semibold text-blue-600 md:text-3xl lg:text-5xl  text-2xl">Welcome to Our Website</div>
                    <div className="italic mt-4 text-zinc-400 w-4/5 text-lg">At the intersection of innovation and technology, our computer engineering website serves as a gateway to a world of cutting-edge knowledge and expertise. Whether you're a seasoned professional, a student exploring the field, or a technology enthusiast, this platform is designed to provide you with valuable insights, resources, and updates in the realm of computer engineering.</div>
                    <div className="mt-10 mb-6 border-2 w-[25%] md:w-[40%] lg:w-[25%] h-[10.5vh] shadow-md border-orange-700">
                        <div className="py-3 px-3  w-[100%] h-[9.8vh] text-lg hover:-mt-3 transition-all hover:ml-3 text-white capitalize cursor-pointer text-center mx-auto bg-orange-400 shadow-md">get started</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner