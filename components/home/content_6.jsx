"use client"
import react from 'react-dom';
import Image from 'next/image';
import { CaretRight, CheckCircle } from '@phosphor-icons/react';
// import * as Icon from '@phosphor/icons'; // Update the import path for Phosphor Icons

const Content_6= () => {
  return (
    <section className='mx-auto flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-start gap-8 my-20'>

      <div className="basis-1/2 shrink-0 mx-auto grow">
        <Image
          src="https://res.cloudinary.com/dr657lt3a/image/upload/v1699391517/landing/home/xuksnpkq6h35iidaxbzh.jpg"
          alt="logo"
          width={416.25}
          height={285}
        />
      </div>
      
      <div className="basis-1/2 mx-auto gap-4 ">
        <div className="LongHeadlineOnTwo w-72 md:w-full text-stone-900 text-2xl font-bold leading-loose md:text-black md:text-4xl md:leading-20 pb-4 basis-5/6">
          Why make your business sustainable?
        </div>

        <div>
          <ul className='flex flex-col basis-5/6'>
            <li className='flex'>
              <CheckCircle size={24} />
              <span className="w-60 md:w-96 ml-3 md:ml-9">Reduce cost</span>
            </li>

            <li className='flex'>
              <CheckCircle size={24} />
              <span className="w-60 md:w-96 ml-3 md:ml-9">Competitive advantage</span>
            </li>

            <li className='flex '>
              <CheckCircle size={24} />
              <span className="w-60 md:w-96 ml-3 md:ml-9">Transparency to customers and investors</span>
            </li>

            <li className='flex '>
              <CheckCircle size={24} />
              <span className="w-60 md:w-96 ml-3 md:ml-9">Be ahead of climate regulations and compliances</span>
            </li>
          </ul>
        </div>

        <div className="basis-5/6 tracking-tight text-base md:text-md inline-flex pt-6 items-center">
          <span>Read more detailed case study</span>
          <CaretRight size={20} />
        </div>
      </div>
    </section>
  );
};

export default Content_6;
