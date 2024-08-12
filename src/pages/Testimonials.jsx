import React, { useRef, useState, useEffect } from 'react';

const Testimonials = () => {
    const slide1Ref = useRef(null);
    const slide2Ref = useRef(null);
    const slide3Ref = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (activeSlide === 0) setSlideWidth(0);
        if (activeSlide === 1) setSlideWidth(slide2Ref.current.offsetWidth);
        if (activeSlide === 2) setSlideWidth(slide3Ref.current.offsetWidth * 2);
    }, [activeSlide]);

    return (
        <div>
            <section className="py-10 lg:py-10 overflow-hidden" id="section3">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg lg:max-w-7xl mx-auto">
                        <div className="flex flex-wrap -mx-4 mb-18 items-center">
                            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                                <div className="max-w-md">
                                    <h1 className='text-green-600 text-xl  shadow-[0_2px_10px_-1px_rgba(6,81,237,0.3)] w-fit p-3 rounded-full mb-2'>Testimonials</h1>
                                    <h1 className=" text-2xl xs:text-6xl">
                                        <span >Our Customer Say <br />
                                            Something </span>
                                        <span className="text-green-600">About Us</span>
                                    </h1>
                                </div>
                            </div>

                        </div>
                        <div className="overflow-hidden md:mt-12">
                            <div
                                style={{ transform: `translateX(-${slideWidth}px)` }}
                                className="flex transition-transform duration-500 ease-in-out -m-5"
                            >
                                <div ref={slide1Ref} className="flex-shrink-0 h-full w-full p-5">
                                    <div className="flex flex-wrap mb-16 md:mb-12  ">
                                        <div className="relative w-full md:w-1/2 pb-16 md:pb-0 px-4 mb-12 lg:mb-0">
                                            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-60 bg-gray-500"></div>
                                            <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-52 bg-gray-500"></div>
                                            <div className="max-w-sm  ">
                                                <h5 className="lg:text-xl font-semibold text-lg mb-10">Shopify Marketing</h5>
                                                <p className="text-lg text-gray-600 mb-6"><span className='text-green-600'>“</span>Meer Agency Service Is highly Recommended For their best results ,i'm looking to contact with them in future. <span className='text-green-600'>”</span></p>
                                                <div>
                                                    <div className="ml-4 ">
                                                        <span className="lg:text-xl text-green-600 ">Swiftship - Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 px-4">
                                            <div className="max-w-sm lg:mx-auto">
                                                <h5 className="lg:text-xl font-semibold text-lg mb-10">Impressive Partnership</h5>
                                                <p className="text-lg text-gray-600 mb-6"><span className='text-green-600'>“</span>Our experience with Meer has been nothing short of impressive. They played a vital role in scaling our startup.<span className='text-green-600'>”</span></p>
                                                <div className="flex ">
                                                    <div className="ml-4 ">
                                                        <span className=" lg:text-xl text-green-600 ">Neon Clothing - Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={slide2Ref} className="flex-shrink-0 h-full w-full p-5">
                                    <div className="flex flex-wrap mb-16 md:mb-12 ">
                                        <div className="relative w-full md:w-1/2 pb-16 md:pb-0 px-4 mb-12 lg:mb-0">
                                            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-60 bg-gray-500"></div>
                                            <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-52 bg-gray-500"></div>
                                            <div className="max-w-sm">
                                                <h5 className="lg:text-xl text-lg font-semibold  mb-10">Gardener Marketing</h5>
                                                <p className="text-lg text-gray-600 mb-6"><span className='text-green-600'>“</span>I was not expecting that much response from my clients after hiring Meer Marketing Agency. <span className='text-green-600'>”</span></p>
                                                <div>
                                                    <div className="lg:ml-4 ml-0">
                                                        <span className="lg:text-xl text-start text-green-600">Happy Gardening - Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 px-4">
                                            <div className="max-w-sm md:mx-auto">
                                                <h5 className="lg:text-xl text-lg font-semibold  mb-10">Assistance for Growth</h5>
                                                <p className="text-lg text-gray-600 mb-6"><span className='text-green-600'>“</span>Meer Marketing agency is highly recommened for beginners with low budget and high response.<span className='text-green-600'>”</span></p>
                                                <div >
                                                    <div className="ml-4">
                                                        <span className="lg:text-xl text-green-600">Sparkz - Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={slide3Ref} className="flex-shrink-0 h-full w-full p-5">
                                    <div className="flex flex-wrap mb-16 md:mb-12">
                                        <div className="relative w-full md:w-1/2 pb-16 md:pb-0 px-4 mb-12 lg:mb-0">
                                            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-60 bg-gray-500"></div>
                                            <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-52 bg-gray-500"></div>
                                            <div className="max-w-sm">
                                                <h5 className="lg:text-xl text-lg font-semibold  mb-10">Shopify Marketing</h5>
                                                <p className="text-lg text-gray-500 mb-6"><span className='text-green-600'>“</span>Working with Meer Agency was always brings perfect result, highly recommended for beginners .<span className='text-green-600'>”</span></p>
                                                <div>
                                                    <div className="ml-4">
                                                        <span className="lg:text-xl text-green-600">Eluxure Online - Client</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 px-4">
                                            <div className="max-w-sm md:mx-auto">
                                                <h5 className="lg:text-xl text-lg font-semibold  mb-10">Invaluable Collaborate</h5>
                                                <p className="text-lg text-gray-500 mb-6"><span className='text-green-600'>“</span>I'm are an currently working with Meer Agency. I am Web Developer And Meer is Digital Marketer.<span className='text-green-600'>”</span></p>
                                                <div >
                                                    <div className="ml-4">
                                                        <span className=" lg:text-xl text-green-600">Meer & MoWi - RaJ MaYo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div
                                onClick={() => setActiveSlide(0)}
                                className={`${activeSlide === 0 ? 'bg-orange-900' : 'bg-gray-400 hover:bg-gray-200'
                                    } inline-block mr-1 w-7 h-1 cursor-pointer`}
                            ></div>
                            <div
                                onClick={() => setActiveSlide(1)}
                                className={`${activeSlide === 1 ? 'bg-orange-900' : 'bg-gray-400 hover:bg-gray-200'
                                    } inline-block mr-1 w-7 h-1 cursor-pointer`}
                            ></div>
                            <div
                                onClick={() => setActiveSlide(2)}
                                className={`${activeSlide === 2 ? 'bg-orange-900' : 'bg-gray-400 hover:bg-gray-200'
                                    } inline-block mr-1 w-7 h-1 cursor-pointer`}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
