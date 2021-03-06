// import SignUpInterests from "../Components/SignUpInterests";
import "../Styles/Profile.css"
import React from "react";
import Tag from "../Components/Tag.js";
/* eslint-disable */
// import {auth} from "../firebase";
import {db} from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";
// import firebase from "firebase/compat";

import {auth} from "../firebase"
import firebase from "firebase/compat";

// const auth = a();


export function getUserByUID(UID) {
    return  firebase.database().ref(`Users/${UID}`).once('value');
}



export default function Profile() {
    const user = auth.currentUser;
    // // if (user !== null) {
    //
    //
        const email = user.email;
        const uid = user.uid;
        const name = user.displayName;
        const r =user.providerData;

    // }

        // let UID = firebase.auth().currentUser.uid;
        // let userData = getUserByUID(UID);
        // let des = userData.description;

        return (

            <>
                {/*<Navbar transparent />*/}
                <main className="profile-page">
                    <section className="relative block h-500-px">
                        <div
                            className="absolute top-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:

                                    "url('https://cdn9.dissolve.com/p/D187_257_003/D187_257_003_1200.jpg')",
                            }}
                        >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                        </div>
                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                            style={{transform: "translateZ(0)"}}
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
                            <div
                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div className="relative">
                                                <img
                                                    alt="..."
                                                    src="https://www.assignnmentinneed.com/wp-content/uploads/2020/10/successful-college-student-lg.png"
                                                    // style={{width: 350, height: 150, borderRadius: 210/ 2}}

                                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="text-center mt-12">

                                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            {name}
                                        </h3>


                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                                            {/*{email}*/}
                                        </div>

                                        <div className="mb-2 text-blueGray-600">
                                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                            Law Student at The Hebrew Univerity
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 font-bold text-lg leading-relaxed text-blueGray-600">
                                                    About Me

                                                </p>
                                                <p>
                                                    {r}
                                                    {/*I'm a professional dancer for over 10 years. When I'm not dancing, I'm Swimming or painting. In addition to all that I'm doing my best trying to be a diligent student.*/}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <p className="mb-4 font-bold text-lg leading-relaxed text-blueGray-600">
                                                        My Interests
                                                    </p>
                                                    <p>
                                                        <br/>
                                                        <Tag name="Baseball"/><Tag name="Dancing"/><Tag
                                                        name="Swimming"/><Tag name="Cinema"/><Tag name="Drawing"/>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                {/*<Footer />*/}
            </>
        );
    }

