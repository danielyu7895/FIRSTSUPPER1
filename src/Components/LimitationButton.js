import React, { useState } from 'react'
import "../Styles/InterestButton.css"

//
// const onMouseOver = event => {
//     const el = event.target;
//     let colorhex = [
//         "#3498DB"
//     ];
//     el.style.backgroundColor = colorhex
// };
//
// const onMouseOut = event => {
//     const el = event.target;
//     let white = "#ffffff";
//     el.style.backgroundColor = white;
// };

function LimitationButton({ children }) {
    const [backgroundColor, setBackgroundColor] = useState(false)
    return (
        <button className="bg-purple-dark text-white active:bg-purple-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setBackgroundColor(!backgroundColor)} className={`${backgroundColor && 'active'} profile-interests-tag`}>

            {children}

        </button>
    )
}


export default LimitationButton
