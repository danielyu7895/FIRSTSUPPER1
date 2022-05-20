import LimitationButton from "./LimitationButton";
import React from "react";
/* eslint-disable */
const tags = require('./Limitations.json')

function NutritionalLimitations() {
    return (
        <div className='profile-interests-tags'>
            {tags.map((tag, id) => (
                <LimitationButton key={id}>{tag.content}</LimitationButton>
            ))}
        </div>
    )
}

export default NutritionalLimitations