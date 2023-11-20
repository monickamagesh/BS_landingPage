import React from 'react';
import Image from 'next/image';



const Testimonal = () => {
    return (
    
        <section className='testi'>
        <div className="w-[290px] text-center text-stone-900 text-base font-semibold  leading-[18.73px] shrink-0">Trusted by companies</div>
        <div className="flex flex-row basis-3 md:justify-normal items-center gap-[7px] md:gap-[25px] ">
            <div className=' pt-3 '>
                <Image
                src="https://res.cloudinary.com/dr657lt3a/image/upload/v1699974906/landing/testimonal/pr3esebkkl4hxc1ner46.png"
                alt="logo"
                width={34}
                height={34}
                quality={100}
                // layout='responsive'
                // sizes='(max-width: 767px) 34px, 40px'
                />
            </div>
            
            <div className='w-[107.91px] h-[34px] md:w-[203.12px] justify-center items-center gap-[5px] md:gap[9.86px] inline-flex '>
            <div className='pt-[13px] ' >
                <Image
                className='inline'
                src="https://res.cloudinary.com/dr657lt3a/image/upload/v1699974890/landing/testimonal/q7vcrkatlbwro1wici2v.png"
                alt="vizdale logo"
                width={34 }
                height={34}
                quality={100}
                // layout='responsive'
                sizes='(max-width: 767px) 34px, 40px'
                />
            </div>  
            
            <div className=" text-neutral-700 text-[18.86px] font-semibold font-['Work Sans'] leading-[9.95px] md:leading-[9.86px] pt-3 md:text-2xl lg:text-3xl " >Vizdale
            </div>
            </div>

            <div className=' pt-3 pr-[15px] md:object-fill'>
                <Image
                src="https://res.cloudinary.com/dr657lt3a/image/upload/v1699974888/landing/testimonal/m8cd8qioykq03ohcsl74.png"
                alt='frozen iris'
                width={129.10}
                height={18.59}
                quality={100}
                // layout='responsive'
                sizes='(max-width: 767px) 129.10px, 160px'
        />
            </div>
        </div>
        </section>
        
        );
};

export default Testimonal;
