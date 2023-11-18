import Content_11 from '@/components/content_11';
import Content_1 from '@/components/home/content_1';
import Content_6 from '@/components/home/content_6';
import Cover_2 from '@/components/home/cover_2';
import Sliding from '@/components/home/sliding';

import React, { Suspense } from 'react';


const Home = () => {
  return (
    <main className='' >
      
      <Cover_2 />
      <Content_6 />
      <Content_1 />
      <Sliding />
      <Content_11 />


    </main>
  );
};

export default Home;

