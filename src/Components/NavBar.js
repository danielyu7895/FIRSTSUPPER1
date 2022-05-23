//
// import React from "react";
// import { useState } from "react";
// import "../Styles/NavBar.css";
// import {Link} from "react-router-dom";
//
// function Navbar() {
//     const [isNavExpanded, setIsNavExpanded] = useState(false);
//
//     return (
//         <nav className="navigation">
//             <a href="/" className="brand-name">
//                 First Supper
//             </a>
//             <button
//                 className="hamburger"
//                 onClick={() => {
//                     setIsNavExpanded(!isNavExpanded);
//                 }}
//             >
//                 {/* icon from Heroicons.com */}
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="white"
//                 >
//                     <path
//                         fillRule="evenodd"
//                         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             </button>
//             <div
//                 className={
//                     isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//                 }
//             >
//                 <ul>
//                     <li>
//                         <Link to="./SignUpForm">SignUp</Link>
//                     </li>
//                     <li>
//                         <Link to="/">Find a Meal</Link>
//                     </li>
//                     <li>
//                         <Link to="/">Host a Meal</Link>
//                     </li>
//                     <li>
//                         <Link to="./profile">Profile</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;


/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Profile.css"
// components

// import IndexDropdown from "./Dropdowns/IndexDropdown";
import {Avatar} from "@mui/material";
import ProfileDropdown from "./Dropdowns/ProfileDropdown.js";


export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to="/"
                            className="text-purple-dark text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        >
                            First Supper
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}

                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >

                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {/*<li className="flex items-center">*/}
                            {/*    <IndexDropdown />*/}
                            {/*</li>*/}

                            <li className="flex items-center">
                                <a
                                    className="hover:text-blueGray-500 text-purple-dark px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="/"
                                >
                                    <i className="text-purple-dark far text-lg leading-lg mr-2" />{" "}
                                    Home
                                </a>

                                <a
                                    className="hover:text-blueGray-500 text-purple-dark px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="/Host"
                                >
                                    <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                                    Become a Host
                                </a>

                                <a
                                    className="hover:text-blueGray-500 text-purple-dark px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="/Login"
                                >
                                    <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                                    Login
                                </a>

                                <a
                                    className="hover:text-blueGray-500 text-purple-dark px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="/Register"
                                >
                                    <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                                    Register
                                </a>


                                <a
                                    className="hover:text-blueGray-500 text-purple-dark px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="/FindDinner"
                                >
                                    <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                                    Find a Dinner
                                </a>
                                {/*<a*/}
                                {/*    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"*/}
                                {/*    href="/Profile"*/}
                                {/*>*/}
                                {/*    <Avatar  alt="Omer Dahan" src="https://www.assignnmentinneed.com/wp-content/uploads/2020/10/successful-college-student-lg.png" />*/}
                                {/*</a>*/}
                                <ProfileDropdown/>

                            </li>

                            {/*<li className="flex items-center">*/}
                            {/*    <button*/}
                            {/*        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"*/}
                            {/*        type="button"*/}
                            {/*    >*/}
                            {/*        <i className="fas fa-arrow-alt-circle-down"></i> Download*/}
                            {/*    </button>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}



