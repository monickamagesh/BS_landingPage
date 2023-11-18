import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { InstagramLogo, LinkedinLogo, PinterestLogo, TwitterLogo } from '@phosphor-icons/react';

// import * as Icon from '@phosphor-icons/react/dist/ssr';


const Footer= () => {
    return (
        
        <footer className=' h-[614px] w-auto mt-20 md:h-40 block text-center shrink-0 '>
        <section className='flex flex-col md:flex-row gap-10 flex-inline  justify-center items-center md:justify-between   '>
        
        <div  className=' '>
        <Link href='/'>
        <Image
        src="https://res.cloudinary.com/dr657lt3a/image/upload/v1699391155/landing/logo/nzxiofg4ohvg5jig43bq.png"
        alt="logo"
        width={154}
        height={32}
        />
        </Link>
        </div>

        <div className='flex flex-col items-center gap-5 '>
        <span  className='medium md:hidden'> 
            <Link href='/services'>Service</Link>
        </span>

        <span  className='medium md:hidden'>
            <Link href='/contact'>Contact us</Link>
            
        </ span >
        </div>

        <div className="flex flex-row items-center gap-6 ">
        {/* <InstagramLogo size={32}  weight="fill"  className='md:w-[26px]' />
        <TwitterLogo size={32} weight="fill" className='md:w-[26px]'/>
        <LinkedinLogo size={32} weight="fill" className='md:w-[26px]' />
        <PinterestLogo size={32} weight="fill" className='md:w-[26px]' /> */}
        </div>
        </section>
        <section className='block md:hidden opacity-80'>
        <div className='flex flex-col  my-10 items-center gap-10'>
        <div className='normal flex flex-col items-center gap-5 '>

            <span >Privacy Policy</span>
            <span>Terms of Service</span>
            <span className='md:hidden'>Site Map</span>
            
            
        </div>
        <div className='normal flex flex-col  items-center gap-5 '>
            <span>© 2020 Beyond Sustainability.
            </span> 
            <span>All right reserved.</span>
        </div>
        </div>
        </section>

        <section className="hidden md:block ">
        <div className=" h-5 opacity-80 justify-center text-xs text-center items-center gap-[17px] inline-flex mb-5 mt-10">
            <div className="normal ">© 2020 Beyond Sustainability. All right reserved.</div>
            <div className="normal">Privacy Policy</div>
        </div>
        </section>
        </footer>

        
        );
};

export default Footer;




