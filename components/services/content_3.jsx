
import React from 'react';

const Content_3 = () => {

    const services = [
    {
        id:1,
        service:"Data-driven",
        des:"The information gathered is analysed, interpretations are produced, and one's business is expanded sustainably."
    },
    {
        id:2,
        service:"Tangible result",
        des:"The objectives are accomplished, and the desired result is produced."
    },
    {
        id:3,
        service:"Get cozy ",
        des:"Just unwind as we direct your business toward sustainability."
    },
    {
        id:4,
        service:"Accountability  ",
        des:"We are committed for your company's growth ethically."
    }
    ];
    return (
        <section className='py-14'>
            
            <div className=" mx-auto w-full  flex-col justify-start items-start md:items-center md:gap-3 gap-5 inline-flex">
                <div className=" md:w-3/5   md:text-center md:LongHeadlineToTur md:opacity-100
                opacity-95 text-stone-900 text-3xl font-bold  leading-9">Our Service</div>
                <div className=" md:w-3/5 md:text-center md:l9 normal tracking-normal">You can make decisions with absolute confidence in the direction of sustainability with the aid of our solutions, We deliver.</div>
            </div>
            <div className='flex lg:flex-row flex-col p-3 gap-4 mx-auto'>
            {services.map((items)=> (
                    <div key={items.id} className='bg-zinc-100 gap-4 flex flex-col  justify-start items-start  p-3 m-3 w-full md:w-5/6 lg:w-full mx-auto ' >
                        <div className='text-emerald-700 md:text-2xl font-bold leading-snug
                            text-2xl'>{items.service}</div>
                        <div className='text-black text-base font-normal leading-tight'>{items.des}</div>
                    </div>
            ))}
            </div>



            






        </section>

    );
};

export default Content_3;