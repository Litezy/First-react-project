import React from 'react'
import { SlEnvolope } from 'react-icons/sl'

const PlansSection = () => {
    const Plans = [
        {
            title: 'Starter Plan',
            Duration: '30 days',
            amount: '$1,500',
            roi: '10%',
            incentives: 'No'
        },
        {
            title: 'Bronze Plan',
            amount: '$2,500',
            Duration: '40 days',
            roi: '15%',
            incentives: 'No'
        },
        {
            title: 'Silver Plan',
            amount: '$5,000',
            Duration: '50 days',
            roi: '20%',
            incentives: 'Yes'
        },
        {
            title: 'Gold Plan',
            amount: '7,000',
            Duration: '70 days',
            roi: '25%',
            incentives: 'Yes'
        },
        {
            title: 'Diamond Plan',
            amount: '$10,000',
            Duration: '90 days',
            roi: '30%',
            incentives: 'Yes'
        },


    ]


    return (
        <div>
            <div className="py-10 bg-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-5">
                    {Plans.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl hover:-translate-y-6 hover:shadow-xl transition-all">
                            <div className="bg-sky-600 rounded-tr-xl rounded-tl-xl flex items-center justify-center gap-3 flex-col py-6 capitalize">
                                <SlEnvolope className='text-6xl text-white' />
                                <div className="text-white text-2xl">{item.title}</div>
                            </div>
                            {new Array(1).fill().map((date, nums) => (
                                <div key={nums} className="grid grid-cols-2 py-4 px-4">
                                    <div className="text-semibold ">Amount</div>
                                    <div className="text-right">{item.amount}</div>
                                </div>
                            ))}
                            {new Array(1).fill().map((data, nums) => (
                                <div key={nums} className="grid grid-cols-2 py-4 px-4">
                                    <div className="text-semibold ">Duration</div>
                                    <div className="text-right">{item.Duration}</div>
                                </div>
                            ))}

                            {new Array(1).fill().map((date, nums) => (
                                <div key={nums} className="grid grid-cols-2 py-4 px-4">
                                    <div className="text-semibold ">ROI</div>
                                    <div className="text-right">{item.roi}</div>
                                </div>
                            ))}
                            {new Array(1).fill().map((date, nums) => (
                                <div key={nums} className="grid grid-cols-2 py-4 px-4">
                                    <div className="text-semibold ">Incentives</div>
                                    <div className="text-right">{item.incentives}</div>
                                </div>
                            ))}
                            <div className="w-fit ml-auto px-10 pb-8 pt-3 ">
                                <button className='bg-blue-600 text-white py-3 px-5 rounded-full capitalize shadow-xl hover:bg-orange-400 '>purchase now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlansSection