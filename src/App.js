import React from 'react';
import Navbar from "./Components/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Styles/Profile.css"
/* eslint-disable */
import SignUpForm from "./Pages/SignUpForm.js";
import Home from "./Pages/Home.js";
import SignUpForm2 from "./Pages/SignUpForm2.js";
import Profile from "./Pages/Profile.js";
import YourEvents from "./Pages/YourEvents.js";
import JoinEvent from "./newPages/JoinEvent.js";
import EventPage from "./Pages/EventPage.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import History from "./Pages/History"
import Login from "./newPages/Login";
import Host from "./Pages/Host";
import Register from "./newPages/Register";
import {AuthProvider} from "./authContext";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import NavbarGuest from "./newPages/NavbarGuest";


function App() {

    const [user] = useAuthState(auth)
    return (
        <AuthProvider>
            <Router>
                <ScrollToTop/>
                {user ? <Navbar />: <NavbarGuest/> }
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/SignUpForm' component={SignUpForm} />
                    <Route path='/SignUpForm2' component={SignUpForm2} />
                    <Route path='/Profile' component={Profile} />
                    <Route path= '/Host' component={Host} />
                    <Route path='/FindDinner' component={YourEvents} />
                    <Route path='/EventPage' component={EventPage} />
                    <Route path='/JoinEvent' component={JoinEvent} />
                    <Route path='/History' component={History} />
                    <Route path= '/Login' component={Login} />
                    <Route path= '/Register' component={Register} />

                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;

