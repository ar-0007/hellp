import React from 'react'

const   SkillText = () => {
    return (
        <div className='flex flex-col gap-3'>
            <span className='text-start text-green-600 text-xl p-2 border  w-fit rounded-full shadow-[0_2px_10px_-1px_rgba(6,81,237,0.3)]'>My Skills</span>
            <h1 className=' text-3xl'>Why Hire Me For Your 
                <br />
                Next
                <span className='text-green-600'> Project ?  </span>
            </h1>
            <p className='text-start  text-sm text-gray-500 ms:text-base'>
               I am a Digital Marketer , Graphic Designer , E-Commerce 
                <br />
                That means you need not to worry about anyother person .
            </p>
        </div>
    )
}

export default SkillText;
