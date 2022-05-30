import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Profile.css"



export default function NavbarGuest(props) {
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

                            <li className="flex items-center">


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
                                    href="/aboutUs"
                                >
                                    <i className="text-blueGray-400 far text-lg leading-lg mr-2" />{" "}
                                    about
                                </a>

                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}