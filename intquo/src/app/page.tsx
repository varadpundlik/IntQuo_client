// Import statements remain unchanged
"use client"
import React from 'react';
import './ui/styles.css';
import Image from 'next/image';
import doodle from './ui/assests/Scribbles/scribble1.svg';

type Props = {};

function Page({}: Props) {
  return (
    <>
      {/* Uncommented Navbar */}
      {/* <div><Navbar/></div> */}
      <div className='text-center pt-2 titlecolor'>IntQuo</div>
      <div className='text-center pt-10 text-xl font-semibold mt-10'>Your guide to attain</div>
      <div className='text-center  text-5xl pt-6 mt-15 titlecolor'>Interview</div>
      <div className='hellostyle'>
        {/* Uncommented circle animation */}
        {/* <div className='circle-container'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div> */}
        <div>
          <span className='circle-text'>M</span>
          <span className='circle-text'>a</span>
          <span className='circle-text'>s</span>
          <span className='circle-text'>t</span>
          <span className='circle-text'>e</span>
          <span className='circle-text'>r</span>
          <span className='circle-text'>y</span>
        </div>
      </div>
      <div className='green-section1'>
        {/* Provide alt text for accessibility */}
        <Image src={doodle} alt='Scribble Doodle' width={190} height={190} />
      </div>
    </>
  );
}

export default Page;
