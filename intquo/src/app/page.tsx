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
      <div className='green-section1' style={{ margin: '10px' }}>
        {/* Provide alt text for accessibility */}
        <div className="flex">
  <div className="flex-2 p-5">
    <Image src={doodle} alt='Scribble Doodle' width={150} height={160} style={{ transform: 'rotate(345deg)' }} />
  </div>
  <div className="flex-1 p-5">
    <p className='notable text-4xl text-black'>Discover the interview guide</p>
  </div>
  <div className="flex-1 p-5 text-black" style={{ fontWeight: 'bold' }}>
    Ever felt like youve stumbled your way through an interview? Worry no longer, friend! Our platform is the wind at your back and the solid ground under your feet. A swirling blend of experience-based learning and expert guidance will take you from zero to interview hero.
  </div>
</div>

      </div>
    </>
  );
}

export default Page;
