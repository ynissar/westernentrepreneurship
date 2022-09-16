import React from "react";
import Subheader from "../../components/Subheader";
import TeamMemberCard from "./TeamMemberCard";

import { executives } from "./teamData";

function Team() {
  console.log(executives);
  return (
    <div>
      <Subheader
        title="Team"
        subtitle="Meet our Executive team for 2022/2023!"
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
                    facebook,
                    name,
                    image,
                    calendly,
                  } = executive;
                  return (
                    <TeamMemberCard
                      position={position}
                      email={email}
                      linkedin={linkedin}
                      facebook={facebook}
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
