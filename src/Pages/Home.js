
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import JoinEvent from "../newPages/JoinEvent";


function Home() {
    return (
        <>

            {/*First section*/}
            <section className="header relative items-center flex h-screen max-h-860-px backgroundHome">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-bold text-4xl text-custom">
                                First Supper - Meet ● Eat ● Repeat


                            </h2>
                            <p className="font-semibold mt-4 text-lg leading-relaxed text-custom">
                                    Friday night has just become a lot more exciting!<br/>
                                    Find a dinner and meet new students who live around<br/> you,
                                    accompanied by tasty food and good vibes
                            </p>
                            <div className="mt-12">
                                <Link to="/FindDinner"
                                          // target="_self"
                                          className="about-the-app text-custom font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-purple-dark active:bg-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                >
                                    Let's Get Started
                                </Link>
                                {/*<HashLink to="#about-us-home"*/}
                                {/*          className="about-us ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"*/}
                                {/*          target="_self"*/}
                                {/*>*/}
                                {/*    Who We Are*/}
                                {/*</HashLink>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*/!*About the app*!/*/}
            {/*<section id="about-the-app-home" className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">*/}
            {/*    <div*/}
            {/*        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"*/}
            {/*        style={{ transform: "translateZ(0)" }}*/}
            {/*    >*/}
            {/*        <svg*/}
            {/*            className="absolute bottom-0 overflow-hidden"*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*            preserveAspectRatio="none"*/}
            {/*            version="1.1"*/}
            {/*            viewBox="0 0 2560 100"*/}
            {/*            x="0"*/}
            {/*            y="0"*/}
            {/*        >*/}
            {/*            <polygon*/}
            {/*                className="text-blueGray-100 fill-current"*/}
            {/*                points="2560 0 2560 100 0 100"*/}
            {/*            ></polygon>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*    <div className="container mx-auto">*/}
            {/*        <div className="flex flex-wrap items-center">*/}
            {/*            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">*/}
            {/*                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">*/}
            {/*                    <img*/}
            {/*                        alt="..."*/}
            {/*                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"*/}
            {/*                        className="w-full align-middle rounded-t-lg"*/}
            {/*                    />*/}
            {/*                    <blockquote className="relative p-8 mb-4">*/}
            {/*                        <svg*/}
            {/*                            preserveAspectRatio="none"*/}
            {/*                            xmlns="http://www.w3.org/2000/svg"*/}
            {/*                            viewBox="0 0 583 95"*/}
            {/*                            className="absolute left-0 w-full block h-95-px -top-94-px"*/}
            {/*                        >*/}
            {/*                            <polygon*/}
            {/*                                points="-30,95 583,95 583,65"*/}
            {/*                                className="text-lightBlue-500 fill-current"*/}
            {/*                            ></polygon>*/}
            {/*                        </svg>*/}
            {/*                        <h4 className="text-xl font-bold text-white">*/}
            {/*                            Great for your awesome project*/}
            {/*                        </h4>*/}
            {/*                        <p className="text-md font-light mt-2 text-white">*/}
            {/*                            Putting together a page has never been easier than matching*/}
            {/*                            together pre-made components. From landing pages*/}
            {/*                            presentation to login areas, you can easily customise and*/}
            {/*                            built your pages.*/}
            {/*                        </p>*/}
            {/*                    </blockquote>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="w-full md:w-6/12 px-4">*/}
            {/*                <div className="flex flex-wrap">*/}
            {/*                    <div className="w-full md:w-6/12 px-4">*/}
            {/*                        <div className="relative flex flex-col mt-4">*/}
            {/*                            <div className="px-4 py-5 flex-auto">*/}
            {/*                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">*/}
            {/*                                    <i className="fas fa-sitemap"></i>*/}
            {/*                                </div>*/}
            {/*                                <h6 className="text-xl mb-1 font-semibold">*/}
            {/*                                    CSS Components*/}
            {/*                                </h6>*/}
            {/*                                <p className="mb-4 text-blueGray-500">*/}
            {/*                                    Notus React comes with a huge number of Fully Coded CSS*/}
            {/*                                    components.*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="relative flex flex-col min-w-0">*/}
            {/*                            <div className="px-4 py-5 flex-auto">*/}
            {/*                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">*/}
            {/*                                    <i className="fas fa-drafting-compass"></i>*/}
            {/*                                </div>*/}
            {/*                                <h6 className="text-xl mb-1 font-semibold">*/}
            {/*                                    JavaScript Components*/}
            {/*                                </h6>*/}
            {/*                                <p className="mb-4 text-blueGray-500">*/}
            {/*                                    We also feature many dynamic components for React,*/}
            {/*                                    NextJS, Vue and Angular.*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="w-full md:w-6/12 px-4">*/}
            {/*                        <div className="relative flex flex-col min-w-0 mt-4">*/}
            {/*                            <div className="px-4 py-5 flex-auto">*/}
            {/*                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">*/}
            {/*                                    <i className="fas fa-newspaper"></i>*/}
            {/*                                </div>*/}
            {/*                                <h6 className="text-xl mb-1 font-semibold">Pages</h6>*/}
            {/*                                <p className="mb-4 text-blueGray-500">*/}
            {/*                                    This extension also comes with 3 sample pages. They are*/}
            {/*                                    fully coded so you can start working instantly.*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="relative flex flex-col min-w-0">*/}
            {/*                            <div className="px-4 py-5 flex-auto">*/}
            {/*                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">*/}
            {/*                                    <i className="fas fa-file-alt"></i>*/}
            {/*                                </div>*/}
            {/*                                <h6 className="text-xl mb-1 font-semibold">*/}
            {/*                                    Documentation*/}
            {/*                                </h6>*/}
            {/*                                <p className="mb-4 text-blueGray-500">*/}
            {/*                                    Built by developers for developers. You will love how*/}
            {/*                                    easy is to to work with Notus React.*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*about us*!/*/}
            {/*    <div id="about-us-home" className="container mx-auto overflow-hidden pb-20">*/}
            {/*        <div className="flex flex-wrap items-center pt-32">*/}
            {/*            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">*/}
            {/*                <div className="justify-center flex flex-wrap relative">*/}
            {/*                    <div className="my-4 w-full lg:w-6/12 px-4">*/}
            {/*                        <a*/}
            {/*                            href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"*/}
            {/*                            target="_blank"*/}
            {/*                        >*/}
            {/*                            <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">*/}
            {/*                                <img*/}
            {/*                                    alt="..."*/}
            {/*                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"*/}
            {/*                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"*/}
            {/*                                />*/}
            {/*                                <p className="text-lg text-white mt-4 font-semibold">*/}
            {/*                                    Svelte*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                        <a*/}
            {/*                            href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"*/}
            {/*                            target="_blank"*/}
            {/*                        >*/}
            {/*                            <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">*/}
            {/*                                <img*/}
            {/*                                    alt="..."*/}
            {/*                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"*/}
            {/*                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"*/}
            {/*                                />*/}
            {/*                                <p className="text-lg text-white mt-4 font-semibold">*/}
            {/*                                    ReactJS*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                        <a*/}
            {/*                            href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"*/}
            {/*                            target="_blank"*/}
            {/*                        >*/}
            {/*                            <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">*/}
            {/*                                <img*/}
            {/*                                    alt="..."*/}
            {/*                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"*/}
            {/*                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"*/}
            {/*                                />*/}
            {/*                                <p className="text-lg text-white mt-4 font-semibold">*/}
            {/*                                    NextJS*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                    <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">*/}
            {/*                        <a*/}
            {/*                            href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"*/}
            {/*                            target="_blank"*/}
            {/*                        >*/}
            {/*                            <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">*/}
            {/*                                <img*/}
            {/*                                    alt="..."*/}
            {/*                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"*/}
            {/*                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"*/}
            {/*                                />*/}
            {/*                                <p className="text-lg text-white mt-4 font-semibold">*/}
            {/*                                    JavaScript*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                        <a*/}
            {/*                            href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"*/}
            {/*                            target="_blank"*/}
            {/*                        >*/}
            {/*                            <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">*/}
            {/*                                <img*/}
            {/*                                    alt="..."*/}
            {/*                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"*/}
            {/*                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"*/}
            {/*                                />*/}
            {/*                                <p className="text-lg text-white mt-4 font-semibold">*/}
            {/*                                    Angular*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                        <a*/}
            {/*                            href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"*/}
            {/*                            target="_blank"*/}
            {/*                        >*/}
            {/*                            <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">*/}
            {/*                                <img*/}
            {/*                                    alt="..."*/}
            {/*                                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"*/}
            {/*                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"*/}
            {/*                                />*/}
            {/*                                <p className="text-lg text-white mt-4 font-semibold">*/}
            {/*                                    Vue.js*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">*/}
            {/*                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">*/}
            {/*                    <i className="fas fa-drafting-compass text-xl"></i>*/}
            {/*                </div>*/}
            {/*                <h3 className="text-3xl mb-2 font-semibold leading-normal">*/}
            {/*                    Javascript Components*/}
            {/*                </h3>*/}
            {/*                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">*/}
            {/*                    In order to create a great User Experience some components*/}
            {/*                    require JavaScript. In this way you can manipulate the elements*/}
            {/*                    on the page and give more options to your users.*/}
            {/*                </p>*/}
            {/*                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">*/}
            {/*                    We created a set of Components that are dynamic and come to help*/}
            {/*                    you.*/}
            {/*                </p>*/}
            {/*                <div className="block pb-6">*/}
            {/*    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Alerts*/}
            {/*    </span>*/}
            {/*                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Dropdowns*/}
            {/*    </span>*/}
            {/*                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Menus*/}
            {/*    </span>*/}
            {/*                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Modals*/}
            {/*    </span>*/}
            {/*                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Navbars*/}
            {/*    </span>*/}
            {/*                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Popovers*/}
            {/*    </span>*/}
            {/*                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Tabs*/}
            {/*    </span>*/}
            {/*                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">*/}
            {/*      Tooltips*/}
            {/*    </span>*/}
            {/*                </div>*/}
            {/*                <a*/}
            {/*                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"*/}
            {/*                    target="_blank"*/}
            {/*                    className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"*/}
            {/*                >*/}
            {/*                    View all{" "}*/}
            {/*                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </>
    );
}

export default Home;