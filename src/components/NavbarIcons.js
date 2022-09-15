import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import { useEffect } from "react";
import {
  motion,
  animations,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

import { ReactComponent as W5Logo } from "../images/W5Logo.svg";

function NavbarIcons() {
  const [isOpen, setOpen] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (isOpen) {
      console.log("animation start");
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }
    if (!isOpen) {
      console.log("animation end");
      animation.start({
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }
  }, [isOpen]);

  return (
    <div>
      <div className=" flex py-[1rem] px-8 md:px-14 lg:px-24 w-full shadow bg-white justify-between fixed top-0 z-50">
        <div className="w-2/6 flex ">
          {/* reminder that color should be taken from head */}
          <div className="">
            <Hamburger
              rounded
              direction="right"
              easing="ease-out"
              size={29}
              color="#12141D"
              duration={0.3}
              toggled={isOpen}
              toggle={setOpen}
            ></Hamburger>
          </div>
        </div>
        <div className="w-2/6 flex justify-center items-center">
          <Link to="/">
            <W5Logo className="invisible sm:visible w-14"></W5Logo>
          </Link>
        </div>
        <div className="hidden md:flex space-x-10 child:text-text w-2/6 justify-end items-center">
          <a target="_blank" href="https://www.instagram.com/w5uwo/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl hover:text-[#C13584] hover:duration-150"
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/W5entrepreneurs/">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-2xl hover:text-[#17A9FD] hover:duration-150"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/w5entrepreneurs/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl hover:text-[#0072b1] hover:duration-150"
            />
          </a>
          <a target="_blank" href="https://discord.gg/JycyK5CQay">
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-2xl hover:text-[#738ADB] hover:duration-150"
            />
          </a>
        </div>
      </div>
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
    </div>
  );
}

function Menu(setOpen) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="bg-black fixed h-full w-full z-40"
    >
      <ul className="flex flex-col items-center pt-36">
        <li className="mt-8">
          <Link
            to="/"
            class="text-white font-semibold hover:duration-150 hover:opacity-70 text-4xl"
            onClick={setOpen}
          >
            Home
          </Link>
        </li>
        <li className="mt-8">
          <Link
            to="/opportunities"
            class="text-white font-semibold hover:duration-150 hover:opacity-70 text-4xl"
            onClick={setOpen}
          >
            Opportunities
          </Link>
        </li>
        {/* <li className="mt-8">
          <Link
            to="/resources"
            class="text-white font-semibold hover:duration-150 hover:opacity-70 text-4xl"
            onClick={setOpen}
          >
            Resources
          </Link>
        </li> */}
        <li className="mt-8">
          <Link
            to="/team"
            class="text-white font-semibold hover:duration-150 hover:opacity-70 text-4xl"
            onClick={setOpen}
          >
            Team
          </Link>
        </li>
        {/* <li className="mt-8">
          <Link
            to="/alumnilist"
            class="text-white font-semibold hover:duration-150 hover:opacity-70 text-4xl"
            onClick={setOpen}
          >
            Alumni List
          </Link>
        </li> */}
        <li className="mt-8">
          <Link
            to="/contact"
            class="text-white font-semibold hover:duration-150 hover:opacity-70 text-4xl"
            onClick={setOpen}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default NavbarIcons;
