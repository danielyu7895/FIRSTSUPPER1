import InterestButton from "./InterestButton";
import React from "react";
/* eslint-disable */
const sportTags = require('../interests/Sport.json')

function SignUpInterests() {
    return (
        <div className='profile-interests-tags'>
            {tags.map((tag, id) => (
                <InterestButton key={id}>{sportTags.content}</InterestButton>
            ))}
        </div>
    )
}

export default SignUpInterests