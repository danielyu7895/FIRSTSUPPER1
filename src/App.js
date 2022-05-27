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
// import Footer from "./Components/Footer.js";
import SignUpForm2 from "./Pages/SignUpForm2.js";
import Profile from "./Pages/Profile.js";
// import Settings from "./Pages/Settings.js";
import YourEvents from "./Pages/YourEvents.js";
import JoinEvent from "./newPages/JoinEvent.js";
import EventPage from "./Pages/EventPage.js";
// import Host from "./Pages/Host.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import History from "./Pages/History"
import Login from "./newPages/Login";
import Host from "./Pages/Host";
import Settings from "./Pages/Settings";
import About from "./Pages/About";
import Register from "./newPages/Register";

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
                {/*<Route path='/YourEvents' component={YourEvents} />*/}
                <Route path= '/Login' component={Login} />
                <Route path= '/Settings' component={Settings}/>
                <Route path= '/Register' component={Register} />
                <Route path= '/About' component={About} />

                <Route path= '/Host' component={Host} />
                <Route path='/FindDinner' component={YourEvents} />
                <Route path='/EventPage' component={EventPage} />
                <Route path='/JoinEvent' component={JoinEvent} />
                <Route path='/History' component={History} />
            </Switch>
        </Router>

    );
}

export default App;
