import React from "react";
import { Link, Outlet } from "react-router-dom";

import Subheader from "../../components/Subheader";
import eventData from "./opportunitiesData";

function Events() {
  return (
    <div>
      <Subheader
        title="Opportunities"
        subtitle="How to get involved"
      ></Subheader>
      <div className="flex flex-col items-center mb-24">
        <div class="grid gap-8 grid-cols-1 grid-rows-2 mt-12 w-9/12 md:grid-cols-2">
          {eventData.map((event) => {
            return (
              <OpportunityCard
                title={event.title}
                description={event.description}
                image={event.image}
              ></OpportunityCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function OpportunityCard({ title, description, image }) {
  return (
    <div class="w-full relative bg-white rounded-lg border border-gray-200 shadow-md">
      <Link to={"/opportunities/" + title.split(" ").join("")}>
        <img class="rounded-t-lg " src={image} alt="" />
      </Link>
      {/* <div class="absolute top-4 right-2">
        <span class="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          #winter
        </span>
      </div> */}
      <div className="px-6 pb-4 pt-6">
        <Link to={"/opportunities/" + title.split(" ").join("")}>
          <h5 class=" text-2xl mb-2 font-bold tracking-tight text-theme">
            {title}
          </h5>
        </Link>
        <p class="font-normal text-gray-700">{description}</p>
      </div>
      <Outlet />
    </div>
  );
}

export default Events;
