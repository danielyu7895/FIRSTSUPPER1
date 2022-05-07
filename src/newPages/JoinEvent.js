import React from "react";
import { Link } from "react-router-dom";

// components

import Tag from "../Components/Tag";

// page content
export default function JoinEvent() {
    return (
        <>
            <main className="JoinEvent">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://img.freepik.com/free-photo/group-friends-eating-together-with-glass-wine-dining-table-hands-taking-food-from-bowl-plate-group-people-enjoying-variety-food-drinks-getogether-party_425263-3880.jpg?w=2000')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                // src={require("assets/img/team-2-800x800.jpg").default}
                                                src = "https://img2.ad.co.il/NadlanSaleImages/1696349_0.jpg"
                                                style={{width: 210, height: 210, borderRadius: 210/ 2}}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-210-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            {/*                       <button*/}
                                            {/*  className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"*/}
                                            {/*  type="button"*/}
                                            {/*>*/}
                                            {/*  Connect*/}
                                            {/*</button> */}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        4-8
                        </span>
                                                <span className="text-sm text-blueGray-400">
                                                    <br/>
                        Guests
                        </span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        3
                        </span>
                                                <span className="text-sm text-blueGray-400">
                                                    <br/>
                        Available Spots
                        </span>
                                            </div>



                                            {/* <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        Traditional Shabbat Dinner
                                    </h3>
                                    <div className="text-lg mt-0 leading-normal mb-2 font-regular text-blueGray-400">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                        Sderot Ben Maimon, Rehavia
                                    </div>
                                    <div className="text-lg mt-0 leading-normal mb-2 font-regular text-blueGray-400">
                                        {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "} */}
                                        Friday 20/05/22 at 19:00
                                    </div>
                                    {/* <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div> */}
                                    <div className="text-lg mt-0 leading-normal mb-2 font-regular text-blueGray-400">
                                        {/* <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i> */}
                                        Hosted by Amit Lahav
                                    </div>
                                </div>

                                {/*wide line*/}
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center"></div>

                                {/*second part*/}
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form> {/*tab with all questions*/}
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Send a message to your host
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        You may tell him about your prefernces, a game you would like to bring, or ask a question about dinner,
                                                        There's no wrong answer here!
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue=""
                                                        rows="2"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Tell us what would you like to bring with you
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        choose from: main dish/side dish/dessert/beverage
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        rows="2"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Would you like to bring your partner?
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-12">
                                            <button className="bg-purple-dark text-white active:bg-purple-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                                    onClick={() => setShowModal(true)}
                                            >
                                                Join
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}


/*Pop up message of confirmation*/
export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Done!
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        You've successfully registered for "Traditional Shabbat Dinner"
                                        <br/>
                                        on Friday 20/05/22 at 19:00
                                        <br/>
                                        Looking forward to having you!
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-blueGray-100 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-purple-dark text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Great
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}