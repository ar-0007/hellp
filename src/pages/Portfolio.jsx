import React from 'react'
import PortfolioData from '../components/PortfolioData'
import PortfolioText from '../components/PortfolioText'

const Portfolio = () => {
  return (
    <section id="section2" >
    <div className="flex w-full flex-col lg:flex-row mt-6">
        <div className="card  rounded-box grid flex-grow place-items-center">
            <PortfolioText />
        </div>
        <div className=" lg:divider-horizontal mx-0"></div>
        <div className="card rounded-box grid  overflow-hidden flex-grow place-items-center">
            <PortfolioData />
        </div>
    </div>
</section>
  )
}

export default Portfolio
