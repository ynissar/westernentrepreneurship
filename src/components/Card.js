import React from "react";

function Card({ platform, desc, myInfo, link }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-4xl text-theme font-semibold">{platform}</h3>
        <p className="mt-3 max-w-2xl">{desc}</p>
        <a
          href={link}
          target="_blank"
          className="mt-1 max-w-2xl font-bold hover:text-secondary duration-150"
        >
          {myInfo}
        </a>
      </div>
    </div>
  );
}

export default Card;
