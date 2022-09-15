import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUsers, faBuilding } from "@fortawesome/free-solid-svg-icons";

function BenefitSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeOut",
        },
      });
    }
    if (!inView) {
      animation.start({ y: 100 });
    }
  }, [inView]);

  return (
    <section>
      <motion.div
        animate={animation}
        initial={{ opacity: 0 }}
        ref={ref}
        className="bg-[#E5E4E2] flex flex-col items-center px-5 pb-24"
      >
        <p className="text-5xl mt-24 mb-6 text-center text-theme font-bold">
          What we provide
        </p>
        <div className="grid gap-10 grid-cols-1 grid-rows-2 xl:grid-rows-1 mt-12 w-4/5 md:grid-cols-1 xl:grid-cols-3 justify-center ">
          <IconCard
            description="From Ivey HBA2s to first-years, connect with Western's best and make friendships that will last a lifetime!"
            title="300+ annual general members"
            icon={faUsers}
          ></IconCard>
          <IconCard
            description="Experience a diverse range of competitions, conferences, and workshops offered by our six portfolios!"
            title="10+ Career Focused Events"
            icon={faCalendar}
          ></IconCard>
          <IconCard
            description="Follow the path of extremely successful student companies by participating in our startup-oriented events!"
            title="40+ Student Companies Helped"
            icon={faBuilding}
          ></IconCard>
        </div>
      </motion.div>
    </section>
  );
}

function IconCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center ">
      <div className="px-4 shadow-lg py-5 sm:px-6 bg-gradient-to-r from-[#F9F4F9] to-[#F1F9FA] rounded-lg flex-grow">
        <FontAwesomeIcon
          icon={icon}
          className="text-3xl mt-12 text-secondary"
        ></FontAwesomeIcon>
        <h3 className="mt-14 text-2xl text-secondary font-semibold">{title}</h3>
        <p className="mt-3 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

export default BenefitSection;
