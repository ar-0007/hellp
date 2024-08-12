import React from 'react'
import SkillText from '../components/SkillText'
import SkillCards from '../components/SkillCards'

const Skills = () => {
    return (
        <section >
            <div className="flex w-full flex-col lg:flex-row mt-10">
                <div className="card  rounded-box grid flex-grow place-items-center">
                    <SkillText />
                </div>
                <div className=" lg:divider-horizontal mx-0"></div>
                <div className="card  rounded-box grid  flex-grow place-items-center">
                    <SkillCards />
                </div>
            </div>
        </section>
    )
}

export default Skills
