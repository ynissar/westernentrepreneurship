import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="py-6 px-8 md:px-14 lg:px-24 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 flex-col mt-16">
      <ul class="flex flex-wrap items-center mt-3 text-text sm:mt-0 mb-4 text-base justify-center ">
        <li>
          <Link to="/" class="mr-4 hover:underline md:mr-6 ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/opportunities" class="mr-4 hover:underline md:mr-6 ">
            Opportunities
          </Link>
        </li>
        {/* <li>
          <Link to="/resources" class="mr-4 hover:underline md:mr-6 ">
            Resources
          </Link>
        </li> */}
        <li>
          <Link to="/team" class="mr-4 hover:underline md:mr-6 ">
            Team
          </Link>
        </li>
        {/* <li>
          <Link to="/alumnilist" class="mr-4 hover:underline md:mr-6 ">
            Alumni List
          </Link>
        </li> */}
        <li>
          <Link to="/contact" class="mr-4 hover:underline md:mr-6 ">
            Contact
          </Link>
        </li>
      </ul>
      <span class="text-sm text-text sm:text-center mt-4">
        © {new Date().getFullYear()}{" "}
        <a href="https://www.w5entrepreneurs.com/" class="hover:underline">
          Western Entrepreneurship Association
        </a>{" "}
        | All Rights Reserved | Made with ♥
      </span>
    </footer>
  );
}

export default Footer;
