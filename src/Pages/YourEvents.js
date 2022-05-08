import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Profile.css";

// Components
import EventsHeader from "../Components/EventsHeader";
import EventCard from "../Components/Cards/EventCard";

// components

export default function YourEvents() {
  return (
      <main>
        <div className="relative block h-350-px">
        {/* eventsHeader */}
          <EventsHeader/>
        {/* <Tabs for filters (all koasger..)/> */}
          {/* <FilterSample/> */}
        </div>
        <div className="relative mx-auto">
            <div className="justify-center flex flex-wrap">
              <button className="bg-purple-dark text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/YourEvents">All</Link>
              </button>
            

              <button className="bg-purple-dark text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/kosherEvents">kosher</Link>
              </button>

              <button className="bg-purple-dark text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/vegeterianEvents">vegeterian</Link>
              </button>

              <button className="bg-purple-dark text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150" type="button">
                <Link to="/veganEvents">vegan</Link>
              </button>
            </div>
          </div>  
         {/*non static element - preasents the events  */}

        <div className="relative py-16 bg-blueGray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap ">
              {/* Cards */}
              
              <EventCard
              statTitle="Yummy Shishi"
              statImg="https://www.tyla.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.tyla.com%2Fs3%2Fcontent%2Fe04e37f35f584ef45a1658daba72cdd5.png"
              statHostedBy="Matan Levi"
              statWhere="Rehavia"
              statDate="20/05/2022"
              statTime="19:00"
              statMinGuests= {6}
              statMaxGuests= {12}
              statDescripiron ="Shishi for food lovers!
              everyone brings his best dish:) Wine and cake - on me"
              statMoreInfo="/EventPage"

              />
              <EventCard
              statTitle="Meet and talk"
              statImg="https://c.stocksy.com/a/qSx400/z9/1181896.jpg"
              statHostedBy="Michal Noy"
              statWhere="Musrara"
              statDate="13/05/2022"
              statTime="21:00"
              statMinGuests= {4}
              statMaxGuests= {8}
              statDescripiron ="The food will be great and the talking even more. 20 questions of haaretz in the menu"
              statMoreInfo="/EventPage"

              />
              <EventCard
              statTitle="Snacks, beer and games"
              statImg="https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2020/03/shutterstock-four-friends-video-game-night-eating-pizza.jpg"
              statHostedBy="Ronie Levie"
              statWhere="Rehavia"
              statDate="20/05/2022"
              statTime="19:00"
              statMinGuests= {2}
              statMaxGuests= {6}
              statDescripiron ="For those who only want to have fun, without a too serious Shishi dinner. You bring beers and I'll bring food and happy things. "
              statMoreInfo="/EventPage"
              />
              {/*<Link to="/JoinEvent" className="bg-purple-dark text-white active:bg-purple-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"> Join</Link>*/}


              
              <EventCard
              statTitle="Dinner with students from aboard"
              statImg="https://static.timesofisrael.com/atlantajewishtimes/uploads/2016/11/airbnb-of-shabbat-to-ease-political-tension-02.jpg"
              statHostedBy="Or Cohen"
              statWhere="The City ​​Center"
              statDate="13/05/2022"
              statTime="19:30"
              statMinGuests= {2}
              statMaxGuests= {16}
              statDescripiron ="We will be polite hosts and manage the meal in English. Feel free to come with English or foreign friends."
              statMoreInfo="/EventPage"

              />
              <EventCard
              statTitle="Traditional Shabbat Dinner"
              statImg="https://thejewishnews.com/wp-content/uploads/2020/09/Lauren-Hoffman.jpg"
              statHostedBy="Amit Lahav"
              statWhere="Rehavia"
              statDate="20/05/2022"
              statTime="19:00"
              statMinGuests= {4}
              statMaxGuests= {8}
              statDescripiron ="Nice food, traditional Shabbat songs and great Israeli vibes! "
              statMoreInfo="/EventPage"

              />
              <EventCard
              statTitle="Freestyle Shishi"
              statImg="https://medias.timeout.co.il/www/uploads/2018/02/DSF0924_t-1140x641.jpg"
              statHostedBy="Shani Dahan"
              statWhere="Nachlaot"
              statDate="13/05/2022"
              statTime="20:00"
              statMinGuests= {2}
              statMaxGuests= {10}
              statDescripiron ="Bring whatever you like, lets have a great SHISHI! "
              statMoreInfo="/EventPage"
              />
              <EventCard
              statTitle="Shishi for Ladies only"
              statImg="https://i0.wp.com/acaseforplantbased.com/wp-content/uploads/2020/03/group-of-girlfriends-at-dinner-scaled.jpg?fit=1024%2C686&ssl=1"
              statHostedBy="Moran Kahana"
              statWhere="Rehavia"
              statDate="20/05/2022"
              statTime="19:00"
              statMinGuests= {4}
              statMaxGuests= {8}
              statDescripiron ="Female dinner - good food and lots of wine, could be better than that? Suitable for vegetarianism. "
              statMoreInfo="/EventPage"

              />
              <EventCard
              statTitle="Italian shishi dinner"
              statImg="https://www.blogwithakesh.com/wp-content/uploads/2020/02/friends-dinner.jpg"
              statHostedBy="Fabiano Hochman"
              statWhere="Katamon"
              statDate="13/05/2022"
              statTime="21:30"
              statMinGuests= {2}
              statMaxGuests= {10}
              statDescripiron ="Italian Friday meal - pizza, pasta, wine, Italian music. At the end of the meal we will move to the living room for a fine Italian film. "
              statMoreInfo="/EventPage"

              />
              

              


            </div>
        </div>

        </div>
        
      </main>
  );
}
