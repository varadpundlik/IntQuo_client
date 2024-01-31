import React from 'react';
import Navbar from './ui/navbar/Navbar';
import './ui/styles.css';

type Props = {};

function Page({}: Props) {
  return (
    <>
      <div><Navbar/></div>
      <div className='text-center pt-2 titlecolor'>IntQuo</div>
      <div className='text-center pt-10 text-xl font-semibold mt-10'>Your guide to</div>
      <div className='text-center  text-5xl pt-6 mt-15'> Interview</div>
      <div className='hellostyle'>
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
      {/* </div> */}
    </>
  );
}


export default Page;
