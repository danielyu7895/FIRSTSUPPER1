/*
class Event_page{
    Profile host;
    String title;
    String description;
    String location;
    String date;
    String time;

    int max_guests;
    int min_guests;
    int cur_guests;

    Array event_tag;
    Dinner_Style dinner_style;
    boolean kosher;
    boolean shomer_shabbat;
    boolean vagan;
    boolean vegeterian;
    boolean vegan_friendly;
    boolean vegeterian_friendly;
    Image image;
    Array (of profile objects) guests;
    Array (of interst_tag object) event_interests}
*/


import { useState } from 'react';
import "./createStyle.css";
export default function CreateEvent() {

    // extract host profile

    // Event details
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Location, setLocation] = useState('');
    const [Date, setDate] = useState('');
    const [Time, setTime] = useState('');
    const [Guests, setGuests] = useState('');
    const [MinGuests, setMinGuests] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const checkValueIsNumber = (input) => {
        //Handler called on button click
        if (isNaN(input)) {
            //if input is not a number then
            alert('Please enter a Number');
        } else {
            //if input is number then here
            return input;
        }
    }

    // Handling title change
    const handleTitle = (e) => {
        setTitle(e.target.value);
        setSubmitted(false);
    };

    // Handling description change
    const handleDescription = (e) => {
        setDescription(e.target.value);
        setSubmitted(false);
    };

    // Handling location change
    const handleLocation = (e) => {
        setLocation(e.target.value);
        setSubmitted(false);
    };

    // Handling Date change
    const handleDate = (e) => {
        setDate(e.target.value);
        setSubmitted(false);
    };

    // Handling Time change
    const handleTime = (e) => {
        setTime(e.target.value);
        setSubmitted(false);
    };

    // Handling Guests change
    const handleGuests = (e) => {
        setGuests(e.target.value);
        checkValueIsNumber(e)
        setSubmitted(false);
    };

    // Handling MinGuests change
    const handleMinGuests = (e) => {
        setMinGuests(e.target.value);
        checkValueIsNumber(e)
        setSubmitted(false);
    };


    // Handling submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Title === '' || Description === '' || Location === '' || Date === '' || Time === '' || Guests === '' || MinGuests === '') {
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
                <h1>{Title} Event successfully Created!!</h1>
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
                <h1>Please fill all fields</h1>
            </div>
        );
    };

    return (
        <div className="createEvent">
            <div>
                <h1>Create Event</h1>
            </div>

            {/* Call methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <createEvent>
                {/* Labels and inputs for createEvent data */}
                <label className="label">Title</label>
                <input onChange={handleTitle} className="input"
                       value={Title} type="text"/>

                <label className="label">Description</label>
                <input onChange={handleDescription} className="input"
                       value={Description} type="text"/>

                <label className="label">Location</label>
                <input onChange={handleLocation} className="input"
                       value={Location} type="address"/>

                <label className="label">Date</label>
                <input onChange={handleDate} className="input"
                       value={Date} type="date"/>

                <label className="label">Time</label>
                <input onChange={handleTime} className="input"
                       value={Time} type="time"/>

                <label className="label">Guests</label>
                <input onChange={handleGuests} className="input"
                       value={Guests} type="integer"/>

                <label className="label">MinGuests</label>
                <input onChange={handleMinGuests} className="input"
                       value={MinGuests} type="integer"/>


                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>

            </createEvent>
        </div>
    );
}