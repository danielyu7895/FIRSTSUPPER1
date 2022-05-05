import InterestButton from "./InterestButton";
import React from "react";
/* eslint-disable */
const tags = require('./Interests.json')

function SignUpInterests() {
    return (
        <div className='profile-interests-tags'>
            {tags.map((tag, id) => (
                <InterestButton key={id}>{tag.content}</InterestButton>
            ))}
        </div>
    )
}

export default SignUpInterests