import React from 'react'
import ProjectSwiper from '../Swiper/ProjectData'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';

const PortfolioData = () => {
  return (
    <div>
    <ProjectSwiper />
    </div>
  )
}

export default PortfolioData
