"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import * as Icon from '@phosphor-icons/react/dist/ssr';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

const Sliding= () => { 
    const text =   `"Globally, 85 percent of people indicate that they have shifted their purchase behavior towards being more sustainable in the past five years"`;

    const read1 = 'Read more'

    
    return (
        
        <div className='pb-0 mx-auto py-20 md:py-40 '>
            <div className='hidden md:block  items-center'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                <SwiperSlide >
                    <div className=' lswiper m-auto  '>
                    <div className='semibold'>{text}</div>
                    <div className=' inline-flex items-center'><span>{read1}</span>
                    {/* <Icon.CaretRight size={20} weight="bold" /> */}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' lswiper m-auto  '>
                    <div className='semibold'>{text}</div>
                    <div className=' inline-flex items-center'><span>{read1}</span>
                    {/* <Icon.CaretRight size={20} weight="bold" /> */}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' lswiper m-auto  '>
                    <div className='semibold'>{text}</div>
                    <div className=' inline-flex items-center'><span>{read1}</span>
                    {/* <Icon.CaretRight size={20} weight="bold" /> */}
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' lswiper m-auto  '>
                    <div className='semibold'>{text}</div>
                    <div className=' inline-flex items-center'><span>{read1}</span>
                    {/* <Icon.CaretRight size={20} weight="bold" /> */}
                      </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>


            <div className='md:hidden block items-center'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
                <SwiperSlide >
                    <div className=' mswiper '>
                        <div className='mtext'>{text}</div>
                        <div className='link'> {read1}  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' mswiper '>
                        <div className='mtext'>{text}</div>
                        <div className='link'> {read1}  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' mswiper '>
                        <div className='mtext'>{text}</div>
                        <div className='link'> {read1}  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' mswiper '>
                        <div className='mtext'>{text}</div>
                        <div className='link'> {read1} </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
        
    );

};

export default Sliding;