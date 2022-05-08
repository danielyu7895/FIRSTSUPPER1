import React from 'react';
import Navbar from "./Components/NavBar.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Styles/Profile.css"

// import Home from './pages';
// import SignUpForm from './pages/SignUpForm';
// import Services from './pages/services';
// import Contact from './pages/contact';
// import SignUp from './pages/signup';
// import SignUpForm from "./Pages/SignUpForm"
// import Form from "./Components/Form";
import SignUpForm from "./Pages/SignUpForm.js";
import Home from "./Pages/Home.js";
import Footer from "./Components/Footer.js";
import SignUpForm2 from "./Pages/SignUpForm2.js";
import Profile from "./Pages/Profile.js";
import Settings from "./Pages/Settings.js";
import YourEvents from "./Pages/YourEvents.js";
import JoinEvent from "./newPages/JoinEvent.js";
import EventPage from "./Pages/EventPage.js";
import ScrollToTop from "./Components/ScrollToTop.js";

function App() {
    return (

        <Router>
            <ScrollToTop/>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/SignUpForm' component={SignUpForm} />
                <Route path='/SignUpForm2' component={SignUpForm2} />
                <Route path='/Profile' component={Profile} />
                {/*<Route path='/Settings' component={EventPage} />*/}
                {/*<Route path='/YourEvents' component={YourEvents} />*/}
                <Route path='/FindDinner' component={YourEvents} />
                <Route path='/EventPage' component={EventPage} />
                <Route path='/JoinEvent' component={JoinEvent} />
            </Switch>
        </Router>

    );
}

export default App;
