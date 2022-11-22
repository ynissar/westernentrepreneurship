import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import eventData from "./homeData";

function EventSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
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
      <motion.div animate={animation} initial={{ opacity: 0 }} ref={ref}>
        <p className="text-5xl mt-24 text-theme font-bold text-center py-6 px-16 md:px-28 lg:px-52 font-montserrat">
          Flagship Events
        </p>
        <motion.div
          animate={animation}
          initial={{ opacity: 0 }}
          class="p-10 px-16 md:px-28 lg:px-40 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6"
        >
          {eventData.map((event) => {
            return (
              <EventCard
                image={event.image}
                title={event.title}
                description={event.description}
              ></EventCard>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

function EventCard({ image, title, description }) {
  return (
    <div class="rounded overflow-hidden ">
      <img class="w-full" src={image} alt="Mountain" />
      <div class="px-6 pb-4 pt-8">
        <div class="font-bold text-xl mb-2 text-center font-montserrat">
          {title}
        </div>
        <p class="text-gray-700 text-base text-center">{description}</p>
      </div>
    </div>
  );
}

export default EventSection;
