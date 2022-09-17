import React from 'react';
import Image from 'next/image';
import hero from '../../public/hero.jpg';

const Banner = () => {
  return (
    <div className='relative'>
      <Image
        src='/hero.jpg'
        layout='responsive'
        objectFit='cover'
        alt='banner-villa'
        width={2500}
        height={1000}
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-white'>Not sure where to go? Perfect.</p>
        <button className='theme-btn bg-white text-purple-500'>
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
