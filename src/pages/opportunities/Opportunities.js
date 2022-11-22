import React from "react";
import { Link } from "react-router-dom";

import Subheader from "../../components/Subheader";
import eventData from "./opportunitiesData";

function Events() {
  return (
    <div className="font-montserrat">
      <Subheader
        title="Opportunities"
        subtitle="How to get involved"
      ></Subheader>
      <div className="flex flex-col items-center mb-24">
        <div class="grid gap-8 grid-cols-1 grid-rows-2 mt-12 w-9/12 lg:grid-cols-2 xl:grid-cols-3 ">
          {eventData.map((event) => {
            return (
              <OpportunityCard
                title={event.title}
                description={event.shortDescription}
                image={event.image}
                tag={event.tag}
              ></OpportunityCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function OpportunityCard({ title, description, tag, image }) {
  return (
    <Link to={"/opportunities/" + title.split(" ").join("")}>
      <div class="w-full relative bg-white rounded-lg border-gray-200 shadow-md shadow-indigo-500/20">
        <img
          class="rounded-t-lg hover:opacity-80 duration-150"
          src={image}
          alt=""
        />
        <div class="absolute top-4 right-2">
          <span class="inline-block bg-secondary rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            {tag}
          </span>
        </div>
        <div className="px-6 pb-4 pt-6">
          <Link to={"/opportunities/" + title.split(" ").join("")}>
            <h5 class=" text-2xl mb-2 text-center font-bold tracking-tight text-theme">
              {title}
            </h5>
          </Link>
          <p class="font-normal text-gray-700 text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Events;
