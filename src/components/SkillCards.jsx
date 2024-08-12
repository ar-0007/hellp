import React from 'react'

const SkillCards = () => {
    return (
        <div className='flex flex-col gap-3 md:mt-16 mt-6 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="p-4 shadow-md rounded-xl w-full hover:bg-[#00df9a] duration-300 group">
                    <div className="flex items-center justify-center">
                        <span className="relative p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-full  group-hover:bg-[rgba(6,81,237,0.3)]">
                            <img src="Digital.png" alt="Digital Marketing" className="h-20 w-20 object-cover" />
                        </span>
                    </div>
                    <div className="flex flex-col justify-start mt-4 mb-4 text-center">
                        <p className="text-xl font-medium text-green-600 group-hover:text-black">Digital Marketer</p>
                        <p className="text-sm leading-10">I'm a Digital Marketer</p>
                    </div>
                </div>


                <div className="p-4 shadow-md rounded-xl w-full hover:bg-[#00df9a] duration-300 group">
                    <div className="flex items-center justify-center">
                        <span className="relative p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] group-hover:bg-[rgba(6,81,237,0.3)] rounded-full">
                            <img src="Ecom.png" alt="E-Commerce " className='h-20 w-20 object-cover' />
                        </span>
                    </div>
                    <div className="flex flex-col justify-start mt-4 mb-4 text-center">
                        <p className="text-xl font-medium text-green-600 group-hover:text-black">E-Commerce</p>
                        <p className="text-sm leading-10">I'm a Digital Marketer</p>
                    </div>
                </div>

                <div className="p-4 shadow-md rounded-xl w-full hover:bg-[#00df9a] duration-300 group">
                    <div className="flex items-center justify-center">
                        <span className="relative p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-full group-hover:bg-[rgba(6,81,237,0.3)]">
                            <img src="Graphic.png" alt="Graphic Designer" className="h-20 w-20 object-cover" />
                        </span>
                    </div>
                    <div className="flex flex-col justify-start mt-4 mb-4 text-center">
                        <p className="text-xl font-medium text-green-600 group-hover:text-black">Graphic Designer</p>
                        <p className="text-sm leading-10">I'm a Graphic Designer</p>
                    </div>
                </div>


                <div className="p-4 shadow-md rounded-xl w-full hover:bg-[#00df9a] duration-300 group">
                    <div className="flex items-center justify-center">
                        <span className="relative p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]  rounded-full group-hover:bg-[rgba(6,81,237,0.3)] ">
                            <img src="WebDev.png" alt="Website Developer" className='h-20 w-20 object-cover' />
                        </span>
                    </div>
                    <div className="flex flex-col justify-start mt-4 mb-4 text-center">
                        <p className="text-xl font-medium text-green-600 group-hover:text-black">Web Developer</p>
                        <p className="text-sm  leading-10">I'm a Website Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCards
