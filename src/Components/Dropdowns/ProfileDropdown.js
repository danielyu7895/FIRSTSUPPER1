// import React from "react";
// import { Link } from "react-router-dom";
// import { createPopper } from "@popperjs/core";
// import {Avatar} from "@mui/material";
//
//
// const ProfileDropdown = () => {
//     // dropdown props
//     const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
//     const btnDropdownRef = React.createRef();
//     const popoverDropdownRef = React.createRef();
//     const openDropdownPopover = () => {
//         createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
//             placement: "bottom-start",
//         });
//         setDropdownPopoverShow(true);
//     };
//     const closeDropdownPopover = () => {
//         setDropdownPopoverShow(false);
//     };
//     return (
//         <>
//             <a
//                 className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                 href="#pablo"
//                 ref={btnDropdownRef}
//                 onClick={(e) => {
//                     e.preventDefault();
//                     dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
//                 }}
//             >
//                 <Avatar  alt="Omer Dahan" src="https://www.assignnmentinneed.com/wp-content/uploads/2020/10/successful-college-student-lg.png" />
//             </a>
//             <div
//                 ref={popoverDropdownRef}
//                 className={
//                     (dropdownPopoverShow ? "block " : "hidden ") +
//                     "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 "
//                 }
//             >
//
//                 <Link
//                     to="/Profile"
//                     className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//                 >
//                     Profile
//                 </Link>
//
//
//                 <Link
//                     to="/Settings"
//                     className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//                 >
//                     Settings
//                 </Link>
//                 <Link
//                     to="/YourEvents"
//                     className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//                 >
//                     Your Events
//                 </Link>
//
//                 <Link
//                     to="/SignOut"
//                     className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
//                 >
//                     Sign Out
//                 </Link>
//             </div>
//         </>
//     );
// };
//
// export default ProfileDropdown;

//
import React from "react";
import { createPopper } from '@popperjs/core';
import {Avatar} from "@mui/material";
import "../../Styles/Profile.css"

const ProfileDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                    <div className="relative inline-flex align-middle w-full">
                        <a
                            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="#pablo"
                            ref={btnDropdownRef}
                            onClick={(e) => {
                                e.preventDefault();
                                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                            }}
                        >
                            <Avatar  alt="Omer Dahan" src="https://www.assignnmentinneed.com/wp-content/uploads/2020/10/successful-college-student-lg.png" />
                        </a>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
                            }
                        >
                            <a
                                href="/Profile"
                                className="text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-purple-dark"
                            >
                                Profile
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />

                            <a
                                href="/History"
                                className="text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-purple-dark"
                            >
                                History
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                            <a
                                href="/YourEvents"
                                className="text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-purple-dark"
                            >
                                Your Events
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                            <a
                                href="/Settings"
                                className="text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-purple-dark"
                            >
                                Settings
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                            <a
                                href="/SignOut"
                                className="text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent text-purple-dark"
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileDropdown;

// import React from "react";
// import { createPopper } from '@popperjs/core';
//
// const ProfileDropdown = () => {
//     // dropdown props
//     const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
//     const btnDropdownRef = React.createRef();
//     const popoverDropdownRef = React.createRef();
//     const openDropdownPopover = () => {
//         createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
//             placement: "bottom-start"
//         });
//         setDropdownPopoverShow(true);
//     };
//     const closeDropdownPopover = () => {
//         setDropdownPopoverShow(false);
//     };
//     return (
//         <>
//             <div className="flex flex-wrap">
//                 <div className="w-full sm:w-6/12 md:w-4/12 px-4">
//                     <div className="relative inline-flex align-middle w-full">
//                         <button
//                             className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 ease-linear transition-all duration-150"
//                             type="button"
//                             ref={btnDropdownRef}
//                             onClick={() => {
//                                 dropdownPopoverShow
//                                     ? closeDropdownPopover()
//                                     : openDropdownPopover();
//                             }}
//                         >
//                             lightBlue Dropdown
//                         </button>
//                         <div
//                             ref={popoverDropdownRef}
//                             className={
//                                 (dropdownPopoverShow ? "block " : "hidden ") +
//                                 "bg-lightBlue-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
//                             }
//                         >
//                             <a
//                                 href="#pablo"
//                                 className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
//                                 onClick={e => e.preventDefault()}
//                             >
//                                 Action
//                             </a>
//                             <a
//                                 href="#pablo"
//                                 className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
//                                 onClick={e => e.preventDefault()}
//                             >
//                                 Another action
//                             </a>
//                             <a
//                                 href="#pablo"
//                                 className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
//                                 onClick={e => e.preventDefault()}
//                             >
//                                 Something else here
//                             </a>
//                             <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
//                             <a
//                                 href="#pablo"
//                                 className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
//                                 onClick={e => e.preventDefault()}
//                             >
//                                 Seprated link
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default ProfileDropdown;

// import React from "react";
// import Dropdown from "@material-tailwind/react/Dropdown"
// import DropdownItem from "@material-tailwind/react/DropdownItem"
// import DropdownLink from "@material-tailwind/react/DropdownLink"
//
// export default function ProfileDropdown() {
//     return (
//         <Dropdown
//             color="lightBlue"
//             placement="bottom-start"
//             buttonText="Dropdown"
//             buttonType="filled"
//             size="regular"
//             rounded={false}
//             block={false}
//             ripple="light"
//         >
//             <DropdownItem color="lightBlue" ripple="light">
//                 Action
//             </DropdownItem>
//             <DropdownLink
//                 href="#"
//                 // color={color}
//                 ripple="light"
//                 onClick={(e) => e.preventDefault()}
//             >
//                 Another Action
//             </DropdownLink>
//             <DropdownItem color="lightBlue" ripple="light">
//                 Something else
//             </DropdownItem>
//         </Dropdown>
//     )
// }