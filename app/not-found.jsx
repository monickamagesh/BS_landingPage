import React from 'react';
import Link from 'next/link';

export default function Notfound() {
  return (
    <main   className='py-32 pt-24 my-10 w-5/6 mx-auto h-auto'>
      <div className=' bold justify-center items-center w-full'>
      <span>oops...page not found :) </span></div>
      <div className='normal justify-center items-center '> Go Back to <span className='btn p-2'><Link href={'/'}>HOME</Link>  </span></div>
      
    </main>
  );
}
