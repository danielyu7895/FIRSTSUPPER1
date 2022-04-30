import { useState } from 'react'
import "./ProfileInterestsTag.css"

function ProfileInterestsTag({ children }) {
    const [backgroundColor, setBackgroundColor] = useState(false)
    return (
        <button onClick={() => setBackgroundColor(!backgroundColor)} className={`${backgroundColor && 'active'} profile-interests-tag`}>
            {children}
        </button>
    )
}

export default ProfileInterestsTag
