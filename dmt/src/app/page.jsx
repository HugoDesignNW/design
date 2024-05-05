import React from "react";
import './globals.css';






export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white-500">


      <div className='grid grid-cols-5 ml-4 mt-16 gap-x-1'>

        <div className='pr-1 min-h-[50px]'>
          <p className="text-xs pb-1 text-gray-500">dESIGN + sTRATEGY</p>

          <div className="pb-1">
          <p className="font-DMT text-xs text-gray-500 max-w-4 hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]">
            i AM A RECENTLY GRADUATED DESIGNER BASED IN VANCOUVER, BC.
            </p>
          </div>

          <p className="text-xs pb-1 text-gray-500">pROFICIENCIES <br /><span className="text-black"> 
          dESIGN<br />pRODUCT dESIGN<br />sPRINTS<br />STRATEGY</span>
          </p>

          <p className="text-xs text-gray-500">pREVIOUSLY WORKED WITH<br /><span className="text-black">cURIKO</span></p>
        </div>

        <div className='min-h-[50px]'>
          <p className="text-xs pb-1">mOST RELEVANT PROJECTS </p>
          <a className="text-xs pb-1 hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]" href="http://www.google.com">
            fUORISALONE 2023
          </a>

          <p className="text-xs text-gray-500 pt-2">
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
          <a className="text-xs pb1 hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]" href="http://www.google.com">
            lE TRIENNALE DI MILANO
          </a>
          <p className="text-xs text-gray-500 pt-2">
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
            <a className="text-xs pb1 hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]" href="http://www.google.com">
              cANADA POST
            </a>
            <p className="text-gray-500 text-xs pt-2">sERVICE DESIGN
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
        <p className="text-xs pb-1">oTHER PROJECTS </p>
          <a className="text-xs pb-1 hover:bg-black hover:text-white hover:p-[0.1vw] hover:m-[-0.1vw]" href="http://www.google.com">
            tHE POLYGON GALLERY
          </a>
            <p className="text-gray-500 text-xs pt-2">pRODUCT DESIGN
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

    </main>
  );
}
