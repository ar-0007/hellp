import React from 'react'

const Project = () => {
    return (
        <div>
            <div className="flex w-full mt-10  ">
                <div className="card rounded-box grid h-20 flex-grow place-items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] ">
                    <span className='text-green-600 text-xl '>40+</span>
                    <p className='text-center'>Statisfy Clients</p>
                </div>
                <div className=" divider-horizontal mx-0 divider-success"></div>
                <div className="card rounded-box grid h-20 flex-grow place-items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] ">
                    <span className='text-green-600 text-xl'>75+</span>
                    <p className='text-center'>Project Completed</p>
                </div>
                <div className=" divider-horizontal mx-0 divider-success"></div>
                <div className="card rounded-box grid h-20 flex-grow place-items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] ">
                    <span className='text-green-600 text-xl'>15+</span>
                    <p className='text-center'>Reviews Given</p>
                </div>
            </div>
        </div>
    )
}

export default Project
