import React, { useState } from 'react'
import "../Styles/InterestButton.css"

function InterestButton({ children }) {
    const [backgroundColor, setBackgroundColor] = useState(false)
    return (
        <button onClick={() => setBackgroundColor(!backgroundColor)} className={`${backgroundColor && 'active'} profile-interests-tag`}>
            {children}
        </button>
    )
}

export default InterestButton
