import React from 'react'

const PortfolioText = () => {
    return (
        <div className='flex flex-col gap-3'>
            <span className='text-start text-green-600 text-xl  p-2 border shadow-[0_2px_10px_-1px_rgba(6,81,237,0.3)] w-fit rounded-full'>Portfolio</span>
            <h1 className=' text-3xl '>My Creative Work
                <br />
                Latest
                <span className='text-green-600'> Project !  </span>
            </h1>
            <p className='text-start text-gray-500 md:text-base text-sm'>
                I have selected and mentioned here some of
                <br />
                my projects to share with you.
                <br /> 
                the stats and snaps for quick view.
            </p>
        </div>
    )
}

export default PortfolioText
