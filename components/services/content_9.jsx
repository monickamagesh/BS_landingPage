import React from 'react';
import Image from 'next/image';

// import * as Icon from '@phosphor-icons/react/dist/ssr';

const Content_9= () => { 
    return (
            <section className='my-40 '> 

            <div className='flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 items-center md:justify-between gap-10 md:gap-0 py-20'>
                <div className='basis-5/12 w-full  items-center '>
                    
                    <div className="LongHeadlineToTur min-w-72 semibold pb-5">Carbon Management</div>

                    <div className="SeparatedTheyLive min-w-72 medium pb-8">Carbon management of an organization is crucial to combatting climate change and transiting to a low carbon future. The risks are mitigated, a systematic methodology is designed and followed to reduce those emissions, and different solutions are applied as necessary.</div >

                    <div className="btn w-full sm:w-36 h-12 px-2.5 py-1.5 justify-start items-center ">Book a demo</div>
                </div>
                <div className='basis-5/12 w-full items-center  '>
                    <img src='https://res.cloudinary.com/dr657lt3a/image/upload/v1699391717/landing/service/wt3n2ui57q9ritagnh93.png' className="w-96 h-74  bg-black bg-opacity-20 rounded-md mx-auto "/>
                </div>
            </div>


            <div className='flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 items-center md:justify-between gap-10 md:gap-0 py-20'>
                <div className='basis-5/12 w-full  items-center '>
                    
                    <div className="LongHeadlineToTur min-w-72 semibold pb-5">ESG strategy</div>

                    <div className="SeparatedTheyLive min-w-72 medium pb-8">ESG stewardship has become an integral factor to indicate sustainable growth of an organization. We help organizations with developing their ESG strategy, implementing their strategy, measure progress and also generate timely reports to communicate with their stakeholders.</div >

                    <div className="btn w-full sm:w-36 h-12 px-2.5 py-1.5 justify-start items-center ">Book a demo</div>
                </div>
                <div className='basis-5/12 w-full items-center  '>
                    <img src='https://res.cloudinary.com/dr657lt3a/image/upload/v1700248095/landing/service/xcokdttt1ctcodjtejkp.jpg' className="w-96 h-74  bg-black bg-opacity-20 rounded-md mx-auto "/>
                </div>
            </div>
    </section>
        );
    };

export default Content_9;