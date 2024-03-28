// Assuming this file is Page.js or a similar component file

"use client";
import React from "react";
import Image from "next/image";
import doodle from "./ui/assests/Scribbles/scribble1.svg"; // Adjust path as necessary
import "./ui/styles.css"; // Ensure the CSS path matches your project structure

function Page() {
  return (
    <>
      <div className="background z-0">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Overlay content with relative positioning to ensure it's on top of the background */}
      <div style={{ position: "relative", zIndex: 2, marginTop: "10vh" }}>
        <div className="relative z-10 mt-10vh">
          <div className="text-center pt-2 text-white text-4xl font-bold">
            IntQuo
          </div>
          <div className="text-center pt-10 text-xl font-semibold mt-10 text-white">
            Your guide to attain
          </div>
          <div className="text-center text-5xl pt-6 mt-15 text-white">
            Interview
          </div>
          <div className="hellostyle">
            <div>
              <span className="circle-text">M</span>
              <span className="circle-text">a</span>
              <span className="circle-text">s</span>
              <span className="circle-text">t</span>
              <span className="circle-text">e</span>
              <span className="circle-text">r</span>
              <span className="circle-text">y</span>
            </div>
          </div>
          <div className=" mt-10px">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 md:p-5">
                <Image
                  src={doodle}
                  alt="Scribble Doodle"
                  width={150}
                  height={160}
                  className="transform rotate-345"
                />
              </div>
              <div className="flex-1 md:p-5">
                <p className="notable text-4xl text-black">
                  Discover the interview guide
                </p>
              </div>
              <div className="flex-1 md:p-5 text-black font-bold">
                Ever felt like you've stumbled your way through an interview?
                Worry no longer, friend! Our platform is the wind at your back
                and the solid ground under your feet. A swirling blend of
                experience-based learning and expert guidance will take you from
                zero to interview hero.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
