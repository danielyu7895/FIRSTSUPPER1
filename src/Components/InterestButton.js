import React, { useState } from 'react'
import "../Styles/InterestButton.css"


const onMouseOver = event => {
    const el = event.target;
    let colorhex = [
        "#3498DB"
    ];
    el.style.backgroundColor = colorhex
};

const onMouseOut = event => {
    const el = event.target;
    let white = "#ffffff";
    el.style.backgroundColor = white;
};

function InterestButton({ children }) {
    const [backgroundColor, setBackgroundColor] = useState(false)
    return (
        <button onClick={() => setBackgroundColor(!backgroundColor)} className={`${backgroundColor && 'active'} 
        {'${backgroundColor && 'hover'} profile-interests-tag`}
                onMouseEnter={event => onMouseOver(event)}
                onMouseOut={event => onMouseOut(event)}>
            {children}

        </button>
    )
}

export default InterestButton
