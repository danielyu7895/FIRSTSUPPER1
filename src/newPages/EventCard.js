import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



export default function EventCard({
    statSubtitle,
    statTitle,
    statArrow,
    statPercent,
    statPercentColor,
    statDescripiron,
    statIconName,
    statIconColor,
}){
  return (
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <img
                  alt="..."
                  src="https://img.freepik.com/free-photo/group-friends-eating-together-with-glass-wine-dining-table-hands-taking-food-from-bowl-plate-group-people-enjoying-variety-food-drinks-getogether-party_425263-3880.jpg?w=2000"
                  className="w-full align-middle rounded-t-lg"
                />
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div> */}
                    <h6 className="text-xl font-semibold">{statTitle}
                    </h6>
                    <br/>
                    <p>
                        Hosted by: Amit Lahav
                    </p>
                    {/* where */}
                    <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> Rehavia
                    </div>
                    {/* when - date */}
                    <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-calendar mr-2 text-lg text-blueGray-400"></i> 20/05/2022
                    </div>
                    {/* when - time */}
                    <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-clock mr-2 text-lg text-blueGray-400"></i> 19:00
                    </div>
                    {/* number of guests */}
                    <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-user-group mr-2 text-lg text-blueGray-400"></i> 4-8 Guests
                    </div>
                    <div className="mt-2 mb-4 text-blueGray-500 border-t border-blueGray-200 ">
                        <br/>
                    Nice food, traditional Shabbat songs and great Israeli vibes! 
                    </div>
                    <Link to="/EventPage" className="font-bold text-blueGray-700 mt-8">more info</Link>
                  </div>
                </div>
              </div>
  );
}

EventCard.defaultProps = {
    statSubtitle: "Traditional Shabbat Dinner",
    statTitle: "Traditional Shabbat Dinner",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
  };
  
EventCard.propTypes = {
    statSubtitle: PropTypes.string,
    statTitle: PropTypes.string,
    statArrow: PropTypes.oneOf(["up", "down"]),
    statPercent: PropTypes.string,
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIconName: PropTypes.string,
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: PropTypes.string,
  };