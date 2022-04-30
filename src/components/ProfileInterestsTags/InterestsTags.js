import ProfileInterestsTag from "./InterestsTag";


const tags = require('C:\\Users\\noamb\\WebstormProjects\\FirstSupper\\src\\components\\ProfileInterestsTags\\Interests.json')

function ProfileInterestsTags() {
    return (
        <div className='profile-interests-tags'>
            {tags.map((tag, id) => (
                <ProfileInterestsTag key={id}>{tag.content}</ProfileInterestsTag>
            ))}
        </div>
    )
}

export default ProfileInterestsTags