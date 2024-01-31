import React from 'react';
import Navbar from './ui/navbar/Navbar';
import './ui/styles.css';

type Props = {};

function Page({}: Props) {
  return (
    <>
      <div><Navbar/></div>
      <div className='hellostyle'>
        <div className='circle-container'>
          <div className='circle'><span className='circle-text'>M</span></div>
          <div className='circle'><span className='circle-text'>a</span></div>
          <div className='circle'><span className='circle-text'>s</span></div>
          <div className='circle'><span className='circle-text'>t</span></div>
          <div className='circle'><span className='circle-text'>e</span></div>
          <div className='circle'><span className='circle-text'>r</span></div>
          <div className='circle'><span className='circle-text'>y</span></div>
        </div>
      </div>
    </>
  );
}


export default Page;
