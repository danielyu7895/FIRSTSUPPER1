// import React from "react";

// function YourEvents(){
//
// // }
//
// // export default YourEvents;
// import React from "react";
// import { Link } from "react-router-dom";
//
//
// // components
//
// export default function YourEvents() {
//   return (
//     <>
//       <main>
//         <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
//           <div
//             className="absolute top-0 w-full h-full bg-center bg-cover"
//             style={{
//               backgroundImage:
//                 "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
//             }}
//           >
//             <span
//               id="blackOverlay"
//               className="w-full h-full absolute opacity-75 bg-black"
//             ></span>
//           </div>
//           <div className="container relative mx-auto">
//             <div className="items-center flex flex-wrap">
//               <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
//                 <div className="pr-12">
//                   <h1 className="text-white font-semibold text-5xl">
//                     Let's Shihi together
//                   </h1>
//                   <h2 className="mt-4 text-lg text-blueGray-200">
//                     Here is Shihi dinners for the next 2 weeks
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
//             style={{ transform: "translateZ(0)" }}
//           >
//             <svg
//               className="absolute bottom-0 overflow-hidden"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="none"
//               version="1.1"
//               viewBox="0 0 2560 100"
//               x="0"
//               y="0"
//             >
//               <polygon
//                 className="text-blueGray-200 fill-current"
//                 points="2560 0 2560 100 0 100"
//               ></polygon>
//             </svg>
//           </div>
//         </div>
//         <div className="container mx-auto">
//           <div className="justify-center flex flex-wrap">
//             <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//               <Link to="/">All</Link>
//             </button>
//
//
//             <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//               <Link to="/">kosher</Link>
//             </button>
//
//             <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//               <Link to="/">vegeterian</Link>
//             </button>
//
//             <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//               <Link to="/">All</Link>
//             </button>
//           </div>
//         </div>
//
//         <div className="container px-4 mx-auto">
//             <div className="flex flex-wrap">
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//               <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
//                   <div className="px-4 py-5 flex-auto">
//                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
//                       <i className="fas fa-award"></i>
//                     </div>
//                     <h6 className="text-xl font-semibold">שישי מסורתי</h6>
//                     <p className="mt-2 mb-4 text-blueGray-500">
//                       ארוחת שישי כמו בבית
//                     </p>
//                     <Link to="/" className="font-bold text-blueGray-700 mt-8">more info</Link>
//                   </div>
//                 </div>
//               </div>
//
//
//             </div>
//         </div>
//       </main>
//     </>
//   );
// }
