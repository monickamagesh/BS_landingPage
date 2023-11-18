import React from 'react';
import Link from 'next/link';

const Cover_1 = () => { 
    return (
        <section className=''>
            <div className='flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 items-center md:justify-between gap-10  md:py-20 py-6 '>
                <div className='basis-3/5 w-full  items-center '>
                    
                    <div className="LongHeadlineToTur min-w-72  pb-5">Solutions essential to achieving sustainability.</div>

                    <div className="SeparatedTheyLive min-w-72 medium pb-8">Our service and expertise will help in your journey of becoming sustainable and building a regenerative future</div >

                    <div className="btn w-full sm:w-36 h-12 px-2.5 py-1.5 justify-start items-center "><Link href={'/Contact'}>Schedule a meet</Link></div>
                </div>
                <div className='basis-2/5 w-full items-center drop-shadow-xl '>
                    <img src='https://res.cloudinary.com/dr657lt3a/image/upload/v1699391714/landing/service/zohkhvtkv4qimzdzptnr.png' className="w-96 h-74 transparent bg-black bg-opacity-20 rounded-md mx-auto " />
                </div>
                
            </div>

        

        </section>
        );
};

export default Cover_1;