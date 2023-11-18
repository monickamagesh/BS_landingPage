import React, { Suspense } from 'react';
import Link from 'next/link';


const Contact = () => {
  return (
    <main   className='py-32 pt-24 my-10 w-5/6 mx-auto h-auto'>
      <div className=' bold justify-center items-center '>Contact page</div>
      <div className='normal justify-center items-center '> Go Back to <span className='btn p-2'><Link href={'/'}>HOME</Link>  </span></div>


    </main>
  );
};

export default Contact;
