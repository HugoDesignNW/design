import React from "react";
import './globals.css';
import Image from "next/image";
import bugoBanner from "../images/intro.png"

import boxtop from "../images/boxtop.svg"

import fsindex from "../images/fsindex.svg"

import underconstruction from "../images/under.svg"


export default function Home() {
  return (
    <main className="font-DMT leading-1 bg-white">

      <div className="ml-6 pt-[6.7vh] w-[75vw]">
      <Image src={bugoBanner}/>
      </div>
      <Image src={boxtop} className="w-screen mt-[9.5vh]"/>

<div className="flex flex-wrap mt-[-13vh] flex-col bg-white">
      <div className='grid grid-cols-5 ml-4 mt-2.5 gap-x-1'>

        <div className='pr-1 min-h-[50px]'>
          <p className="text-xs pb-[1.21vw] text-gray-500">dESIGN + sTRATEGY</p>

          <div className="pb-1">
          <p className="text-xs whitespace-pre-wrap text-gray-500 max-w-5 hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]">
            i AM A RECENTLY <br />
            GRADUATED DESIGNER <br />
            BASED IN VANCOUVER, BC.
            </p>
          </div>

          <p className="text-xs pb-1 text-gray-500">pROFICIENCIES <br /><span className="text-black"> 
          dESIGN<br />pRODUCT dESIGN<br />sPRINTS<br />STRATEGY</span>
          </p>

          <p className="text-xs text-gray-500">pREVIOUSLY WORKED WITH<br /><span className="text-black">cURIKO</span></p>
        </div>

        <div className='min-h-[50px]'>
          <p className="text-xs pb-1">mOST RELEVANT PROJECTS </p>

          <div className="w-[70.5vw] hover:mb-1">
            
          <a className="text-xs pb-1 whitespace-pre-wrap hover:bg-black hover:text-white" href="http://www.google.com">
            fUORISALONE 2023       <span className="font-Icono">w</span>
            <div><Image src={fsindex} className="mt-[-67.3vh] w-[75vw]"/></div>
          </a>
          </div>

          <p className="text-xs text-gray-500 pt-3">
            vISUAL DESIGN AND DIRECTION
            <br /><br />
            fALL 2023
            <br /><br />
            GRAPHIC DESIGN
            <br />
            TYPOGRAPHY
            <br />
            ART DIRECTION

          </p>
        </div>

        <div className='min-h-[50px]'>
          <p className="text-xs pb-1"><br /></p>
          <a className="text-xs pb1 whitespace-pre-wrap hover:bg-black hover:text-white" href="http://www.google.com">
            lE TRIENNALE DI MILANO       <span className="font-Icono">w</span>
          </a>
          <p className="text-xs text-gray-500 pt-3">
            vISUAL DESIGN AND DIRECTION
            <br /><br />
            sPRING 2021
            <br /><br />
            GRAPHIC DESIGN
            <br />
            TYPOGRAPHY
            <br />
            ART DIRECTION

          </p>
        </div>

        <div className='min-h-[50px]'>
          <p className="text-xs pb-1"><br /></p>
            <a className="text-xs pb1 whitespace-pre-wrap hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]" href="http://www.google.com">
              cANADA POST       <span className="font-Icono">w</span>
            </a>
            <p className="text-gray-500 text-xs pt-3">sERVICE DESIGN
              <br /><br />
              fALL 2023
              <br /><br />
              RESEARCH
              <br />
              SPRINTS
              <br />
              VISUAL DESIGN
            </p>
        </div>

        <div className='min-h-[50px]'>
        <p className="text-xs whitespace-pre-wrap pb-1">oTHER PROJECTS       <span className="font-Icono">w</span></p>
          <a className="text-xs pb-1 whitespace-pre-wrap hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]" href="http://www.google.com">
            tHE POLYGON GALLERY       <span className="font-Icono">w</span>
          </a>
            <p className="text-gray-500 text-xs pt-3">pRODUCT DESIGN
              <br /><br />
              sPRING 2022
              <br /><br />
              RESEARCH
              <br />
              SPRINTS
              <br />
              VISUAL DESIGN
              <br />
              pRODUCT DESIGN
            
          </p>
        </div>

      </div>
      </div>
      <Image src={boxtop} className="w-screen pt-[0.8vh]"/>


     {/* <div class="flex flex-wrap">
  <div class="w-full md:w-1/5 p-4">Box 1</div>
  <div class="w-full md:w-1/5 p-4">Box 2</div>
  <div class="w-full md:w-1/5 p-4">Box 3</div>
  <div class="w-full md:w-1/5 p-4">Box 4</div>
  <div class="w-full md:w-1/5 p-4">Box 5</div>
</div>
  */}



    </main>
  );
}
