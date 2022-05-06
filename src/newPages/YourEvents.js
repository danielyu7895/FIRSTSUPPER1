// import React from "react";

// function YourEvents(){

// }

// export default YourEvents;
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Profile.css";
import Tabs from "../Components/Tabs/filerTabs";
import EventsHeader from "../Components/EventsHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventCard from "../Components/Cards/EventCard";


// components

export default function YourEvents() {
  return (
      <main>
        <div className="relative block h-500-px">
        {/* eventsHeader */}
          <EventsHeader/>
        {/* <Tabs for filters (all koasger..)/> */}
          {/* <FilterSample/> */}
        </div>
        <div className="relative mx-auto">
            <div className="justify-center flex flex-wrap">
              <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/YourEvents">All</Link>
              </button>
            

              <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/kosherEvents">kosher</Link>
              </button>

              <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/vegeterianEvents">vegeterian</Link>
              </button>

              <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/veganEvents">vegan</Link>
              </button>
            </div>
          </div>  
         {/*non static element - preasents the events  */}

        <div className="relative py-16 bg-blueGray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <EventCard/>
              <EventCard
              statTitle="title example"/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>

              


            </div>
        </div>

        </div>
        
      </main>
  );
}
