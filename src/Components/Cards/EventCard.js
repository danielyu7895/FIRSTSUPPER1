import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



export default function EventCard({
    statImg,
    statTitle,
    statDescripiron,
    statHostedBy,
    statWhere,
    statMinGuests,
    statMaxGuests,
    statDate,
    statTime,
    statMoreInfo
}){
  return (

        <div className="w-full md:w-4/12 max-h-200-px px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ">
                <img alt="..." src={statImg}
                  className="w-full align-middle rounded-t-lg h-220-px"
                    />
                  <div className="px-4 py-5 flex-auto text-center">
                    
                    <h6 className="text-xl font-semibold">{statTitle}
                    </h6>
                    <br/>
                    <p>
                        Hosted by: {statHostedBy}
                    </p>
                    
                    <div className=" text-blueGray-600">
                    {/* where */}
                        <div className='my-4'>
                            <i className="fas fa-map-marker-alt mr-1 text-lg text-blueGray-400"></i>{statWhere}
                        </div>

                    {/* when - date */}
                        <div className='my-4'>
                            <i className="fas fa-calendar ml-3 mr-1 text-lg text-blueGray-400"></i>{statDate}
                    {/* when - time */}
                            <i className="fas fa-clock ml-3 mr-1 text-lg text-blueGray-400"></i>{statTime}
                        </div>    
                    {/* number of guests */}
                    </div>
                    <div className="my-4 text-blueGray-600">
                        <i className="fas fa-user-group ml-2 mr-1 text-lg text-blueGray-400"></i>{statMinGuests}-{statMaxGuests} Guests
                    </div>
                    <div className="mt-2 mb-4 text-blueGray-500 border-t border-blueGray-200 h-100-px">
                        <br/>
                    {statDescripiron}
                    </div>
                    <div className=''>
                        <Link to={statMoreInfo} className="font-bold text-purple-dark">
                        Show more
                            <i className="fas fa-angles-right ml-2">
                            </i>

                        </Link>
                        {/*<div className="fas fa-angels-right ml-2 w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">*/}
                        {/*    <div className="items-center py-6 px-3 mt-32 sm:mt-0">*/}
                        {/*        <button>*/}
                        {/*            <Link to="/JoinEvent" className="bg-purple-dark text-white active:bg-purple-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"> Join</Link>*/}

                        {/*        </button>*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>  
                  </div>
                </div>
              </div>

  );
}

EventCard.defaultProps = {
    statImg: "https://img.freepik.com/free-photo/group-friends-eating-together-with-glass-wine-dining-table-hands-taking-food-from-bowl-plate-group-people-enjoying-variety-food-drinks-getogether-party_425263-3880.jpg?w=2000",
    statTitle: "Dinner title",
    statDescripiron: "short description",
    statHostedBy: "Host name",
    statWhere: "dinner location",
    statMinGuests: 4,
    statMaxGuests: 8,
    statDate: "01/01/2001",
    // statTime: "20:00",
    statMoreInfo:"/EventPage"
  };
  
EventCard.propTypes = {
    statImg: PropTypes.string,
    statTitle: PropTypes.string,
    statDescripiron: PropTypes.string,
    statHostedBy: PropTypes.string,
    statWhere: PropTypes.string,
    statDate: PropTypes.string,
    statTime: PropTypes.string,
    statMoreInfo: PropTypes.string,
    statMaxGuests: PropTypes.number,
    statMinGuests: PropTypes.number
  };
