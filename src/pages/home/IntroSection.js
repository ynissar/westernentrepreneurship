import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import W5Image from "../../images/w5.jpeg";

function Intro() {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeOut",
        },
      });
    }
    if (!inView) {
      animation.start({ x: -100 });
    }
  }, [inView]);

  return (
    <section>
      <motion.div
        ref={ref}
        animate={animation}
        initial={{ opacity: 0 }}
        className=" py-12 px-16 md:px-28 lg:px-52 mt-16 mb-4 flex flex-col items-center 2xl:flex-row-reverse justify-between"
      >
        <div className="mt-24 mb-10 min-w-xl max-w-2xl sm:ml-12">
          <p className="font-bold text-4xl text-theme text-center md:text-left font-montserrat">
            What is W5?
          </p>
          <p className="font-semibold text-lg mt-1 text-center md:text-left font-montserrat">
            "The Startup to help startups"
          </p>
          <p className="text-md mt-8 text-center md:text-left">
            W5 is a student-run organization at Western University that connects
            students interested in entrepreneurship with the opportunities
            necessary to develop as entrepreneurs and people.
          </p>
          <button className="mt-16 md:mt-8 lg:mt-20 mb-10 xl:mb-6 justify-center font-semibold bg-gradient-to-r shadow- from-indigo-500 via-purple-500 to-theme py-4 text-white px-10 rounded-full hover:opacity-80 duration-100">
            <a
              href="https://www.eventbrite.ca/e/w5-membership-tickets-421331542987"
              target="_blank"
            >
              Purchase your membership here
            </a>
          </button>
        </div>
        <img
          src={W5Image}
          className="shadow-xl rounded-md max-w-xs sm:min-w-xl sm:max-w-2xl h-full "
        ></img>
      </motion.div>
    </section>
  );
}

export default Intro;
