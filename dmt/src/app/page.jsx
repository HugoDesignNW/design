import React from "react";
import './globals.css';
import Image from "next/image";
import Link from 'next/link';
import bugoBanner from "../images/wave2.gif"

import boxtop from "../images/boxtopsoft.svg"

import fscard from "../images/fscard3.svg"
import tmcard from "../images/tmcard.svg"
import cpcard from "../images/cpcard.svg"
import mecard from "../images/amcard.svg"
import opcard from "../images/opcard.gif"

import underconstruction from "../images/under.svg"


export default function Home() {
  return (
    <main className="font-DMT leading-1 bg-white">


      <div className="ml-6 pt-[6.7vh] w-[75vw]">
        <Image src={bugoBanner} />
      </div>

      <Image src={boxtop} className="w-screen mt-[9.5vh]" />

      <div className="flex flex-wrap mt-[-13vh] flex-col bg-white">
        <div className='grid grid-cols-5 ml-4 mt-2.5 gap-x-1'>



          <div>
            <div className='min-h-[50px]'>
              <p className="text-xs pb-3.5">hUGO DURAN FERNANDEZ </p>

              <div className="w-[70.5vw]">
              <a className="text-xs whitespace-pre-wrap hover:bg-black hover:text-white link-animation" href="http://www.google.com">
                  aBOUT       <span className="font-Icono">w</span>
                  <div><Image src={mecard} className="mt-[-34rem] ml-[16.2rem] w-[75vw]" /></div>
                </a>
              </div>

            </div>

            <p className="text-xs text-gray pt-3">
            cONTACT
            </p>

            <p className="text-xs text-black pb-1">
            hDURANFE-AT-SFU.CA<br />
            lINKEDIN<br />
            INSTAGRAM
            </p>

            <p className="text-xs text-gray">pREVIOUSLY WORKED WITH<br /><span className="text-black">cURIKO</span></p>
          </div>





          <div>
            <div className='min-h-[50px]'>
              <p className="text-xs pb-3.5">mOST RELEVANT PROJECTS </p>

              <div className="w-[70.5vw]">
                <a className="text-xs whitespace-pre-wrap hover:bg-black hover:text-white link-animation" href="http://www.google.com">
                  fUORISALONE 2023       <span className="font-Icono">w</span>
                  <div><Image src={fscard} className="mt-[-35rem] w-[75vw]" /></div>
                </a>
              </div>

            </div>

            <p className="text-xs text-gray pt-2">
              vISUAL DESIGN AND DIRECTION
              <br /><br />
              fALL 2023
              <br /><br />
              gRAPHIC DESIGN
              <br />
              aRT DIRECTION
              <br />
              sTRATEGY
            </p>
          </div>




          <div>
            <div className='min-h-[50px]'>
              <p className="text-xs pb-3.5 text-gray">< br/></p>

              <div className="w-[70.5vw]">
                <a className="text-xs pb1 whitespace-pre-wrap hover:bg-black hover:text-white link-animation" href="http://www.google.com">
                  lE TRIENNALE DI MILANO       <span className="font-Icono">w</span>
                  <div><Image src={tmcard} className="mt-[-34rem] ml-[-18.5vw] w-[75vw]" /></div>
                </a>
              </div>

            </div>

            <p className="text-xs text-gray pt-2">
              vISUAL DESIGN AND DIRECTION
              <br /><br />
              sPRING 2021
              <br /><br />
              gRAPHIC DESIGN
              <br />
              aRT DIRECTION
              <br />
              sTRATEGY

            </p>
          </div>



          <div>
            <div className='min-h-[50px]'>
              <p className="text-xs pb-3.5 text-gray">cURRENTLY <span className="text-white bg-green">SEEKING</span></p>

              <div className="w-[70.5vw]">
                <a className="text-xs pb1 whitespace-pre-wrap hover:bg-black hover:text-white link-animation" href="http://www.google.com">
                  cANADA POST       <span className="font-Icono">w</span>
                  <div><Image src={cpcard} className="mt-[-34rem] ml-[-36.5vw] w-[75vw]" /></div>
                </a>
              </div>

            </div>

            <p className="text-gray text-xs pt-2">
              sERVICE DESIGN
              <br /><br />
              fALL 2023
              <br /><br />
              rESEARCH
              <br />
              sPRINTS
              <br />
              vISUAL DESIGN
            </p>
          </div>

          <div>
            <div>
            <div className="w-[70.5vw] pb-[4.8rem]">
                <a className="text-xs pb1 whitespace-pre-wrap hover:bg-black hover:text-white link-animation" href="http://www.google.com">
                  oTHER PROJECTS     <span className="font-Icono">w</span>
                  <div><Image src={opcard} className="mt-[-29.3rem] ml-[-49.3rem] w-[75vw]" /></div>
                </a>
              </div>

            </div>
            <div>
              <div className="w-[70.5vw]">
                <a className="text-xs whitespace-pre-wrap hover:bg-black hover:text-white link-animation" href="http://www.google.com">
                  tHE POLYGON GALLERY      <span className="font-Icono">w</span>
                  <div><Image src={underconstruction} className="mt-[-34rem] ml-[-54.9vw] w-[75vw]" /></div>
                </a>
              </div>

            </div>

            <p className="text-gray text-xs pt-2">
              pRODUCT DESIGN
              <br /><br />
              sPRING 2022
              <br /><br />
              rESEARCH
              <br />
              vISUAL DESIGN
              <br />
              pRODUCT DESIGN

            </p>
          </div>

        </div>
      </div>
      <Image src={boxtop} className="w-screen pt-[0.8rem]" />


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
