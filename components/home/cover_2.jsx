import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Testimonal from './testimonal';

const Cover_2= () => { 
    return (
        <section className='pt-10'>
            <div className='flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 items-center md:justify-between gap-10  py-20 '>
                <div className='basis-3/5 w-full  items-center '>
                    
                    <div className="LongHeadlineToTur min-w-72  pb-5">Let us Transform your sustainability journey.</div>

                    <div className="SeparatedTheyLive min-w-72 medium pb-8">Reduce your environmental impact by using a scientific data-driven approach and restore damage.</div >

                    <div className="btn w-full sm:w-36 h-12 px-2.5 py-1.5 justify-start items-center "><Link href={'/Contact'}>Contact us</Link></div>
                </div>
                <div className='basis-2/5 w-full items-center  '>
                    <Image src='https://res.cloudinary.com/dr657lt3a/image/upload/v1700248034/landing/service/jdrlbfxuyf3ftsbnlmqs.jpg' className="w-96 h-74  bg-black bg-opacity-20 rounded-md mx-auto "/>
                </div>
            </div>

        <Testimonal />

        </section>
        );
};

export default Cover_2;