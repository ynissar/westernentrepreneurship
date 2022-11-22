import React from "react";
import Subheader from "../../components/Subheader";
import TeamMemberCard from "./TeamMemberCard";

import { executives } from "./teamData";

function Team() {
  return (
    <div>
      <Subheader
        title="Team"
        subtitle="Press our pictures to Coffee chat us!"
      ></Subheader>

      {/* Page Container */}
      <div class="flex items-center justify-center mt-16 ">
        <div class="flex flex-col">
          {/* Notes */}

          <div class="flex flex-col">
            {/* Meet the Team */}
            <div class="container max-w-7xl px-4">
              {/* Section Header */}

              {/* Team Members */}
              <div class="flex flex-wrap">
                {executives.map((executive) => {
                  const {
                    position,
                    email,
                    linkedin,
                    instagram,
                    name,
                    image,
                    calendly,
                  } = executive;
                  return (
                    <TeamMemberCard
                      position={position}
                      email={email}
                      linkedin={linkedin}
                      instagram={instagram}
                      name={name}
                      image={image}
                      calendly={calendly}
                    ></TeamMemberCard>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
