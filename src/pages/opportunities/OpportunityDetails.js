import React from "react";
import Subheader from "../../components/Subheader";
import { useParams, Link, Navigate } from "react-router-dom";
import eventData from "./opportunitiesData";

function OpportunityDetails() {
  const { eventName } = useParams();

  const event = eventData.find(
    (event) => event.title.split(" ").join("") == eventName
  );

  return (
    <div className="font-inter">
      {event ? (
        <div>
          <Subheader title={event.title} subtitle={event.subtitle}></Subheader>
          <div className="flex flex-col items-center mb-24  mt-16">
            <img class="rounded-t-lg" src={event.image} alt="" />
            <p className="text-theme mt-16 font-montserrat font-bold text-4xl">
              Summary
            </p>
            <p className="w-3/6 mt-6 text-lg">{event.description}</p>
            <button className="mt-16 md:mt-8 lg:mt-20 mb-10 xl:mb-6 justify-center font-semibold bg-gradient-to-r shadow- from-indigo-500 via-purple-500 to-theme py-4 text-white px-10 rounded-full hover:opacity-80 duration-100">
              <Link to="/opportunities">View all events</Link>
            </button>
          </div>
        </div>
      ) : (
        <Navigate to="/opportunities"></Navigate>
      )}
    </div>
  );
}

export default OpportunityDetails;
