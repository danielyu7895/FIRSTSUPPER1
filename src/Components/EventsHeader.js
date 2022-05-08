// used in EventPage.js

import React from 'react'
import "../Styles/Profile.css";


function EventsHeader() {
  return (
    <>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                backgroundImage:
                    "url('https://c.stocksy.com/a/5CG900/z9/2207205.jpg')",
                }}
            >
                <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className=" my-4 text-white font-bold text-5xl">
                                Let's Shishi together
                            </h1>
                            <h2 className="my-4 text-xl text-blueGray-200">
                             Here is Shishi dinners for you near 
                            </h2>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-orange-600 bg-purple-bright uppercase last mb-6"> 
                            
                            
                            Rehavia, Jerusalem
                            <i className='fas fa-pen ml-2 text-lg text-blueGray-700' /></span>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default EventsHeader

