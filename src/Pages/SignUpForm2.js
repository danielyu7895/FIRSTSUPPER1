import "../Styles/SignUpForm2.css"
import SignUpInterests from "../Components/SignUpInterests";
import React from "react";

function SignUpForm2() {

    return (
        <div className="form2">
            <form>
                <h1 className='headline'>Choose what you like</h1>
            </form>
            <SignUpInterests/>
        </div>
    );
}

export default SignUpForm2;

