import { useState } from 'react';
import "./formStyle.css";
import UploadImg from './upload_image';
export default function Form() {


  // States for registration
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



        // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the first name change
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  // Handling the last name change
  const handleLastName = (e) => {
      setLastName(e.target.value);
      setSubmitted(false);
    };

  // Handling the address change
  const handleAddress = (e) => {
	  setAddress(e.target.value);
	  setSubmitted(false);
  };

  // Handling the birthdate change
  const handleDate = (e) => {
      setDate(e.target.value);
      setSubmitted(false);
    };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };


  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === '' ||lastName === ''|| birthdate === ''|| address === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {firstName} successfully registered!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
          <br/>
          <h1 className={"headline"}>Create your account</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">First Name *</label>
        <input onChange={handleFirstName} className="input"
          value={firstName} type="text" />

        <label className="label">Last Name *</label>
        <input onChange={handleLastName} className="input"
          value={lastName} type="text" />

       <label className="label">Date of Birth *</label>
       <input onChange={handleDate} className="input"
          value={birthdate} type="date"/>

      <label className="label">Address *</label>
      <input onChange={handleAddress} className="input"
		   value={address} type="address" />

        <label className="label">Email *</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password *</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />


      {/*<label className = "label">Gender *</label>*/}
      {/*<label className="checkbox">Female</label>*/}
      {/*<input type="checkbox" id="gender" name="v1" value="Female"/>*/}
      {/*<label className="checkbox">Male</label>*/}
      {/*<input type="checkbox" id="gender" name="v1" value="Male"/>*/}
       <br/>
       <label className={"label2"} htmlFor="Gender">Gender</label>
       <select id="gender" name="gender">
           <option value="Female">Female</option>
           <option value="Male">Male</option>
        </select>

    <br/>
    <br/>


    <h3 className={"label3"}>Upload Image</h3>
     <div className='upload-img'>
       <UploadImg />
     </div>


          <br/>
    <button onClick={handleSubmit} className="btn" type="submit">
       Let's go!
    </button>


    <h4 className= "headline2" >
        By signing up, I agree to First Supper's Terms & Conditions, Trust and Privacy Policy.</h4>



      </form>
    </div>
  );
}

