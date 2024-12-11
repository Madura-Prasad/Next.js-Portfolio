import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  justify-between cursor-pointer md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-red-500  dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75   dark:text-primaryDark xs:text-sm">
          {time}
        </span>
        
      </motion.div>
    </li>
  );
};

const Certificate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center cursor-pointer md:text-6xl xs:text-4xl md:mb-16">
        Certificate
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-5 xs:ml-2">
          <Details
            position="JAVA"
            company="HackerRank"
            companyLink="https://www.hackerrank.com/certificates/iframe/c276e44899db"
            time="Nov 2024"
          />


<Details
            position="JAVA"
            company="Sololearn"
            companyLink="https://www.sololearn.com/en/certificates/CC-JSGZCNZC"
            time="Desc 2024"
          />


<Details
            position="Postman API Fundamentals Student Expert"
            company="Canvas Credentials (Badgr)"
            companyLink="https://api.badgr.io/public/assertions/2QlF7azaQ0e6VWtf41ybMg"
            time="Nov 2024"
          />


<Details
            position="AWS Cloud Technical Essentials"
            company="Coursera"
            companyLink="https://www.coursera.org/account/accomplishments/certificate/H9K3D75LFFHF"
            time="Jul 2023"
          />


<Details
            position="React Basics"
            company="Coursera"
            companyLink="hhttps://www.coursera.org/account/accomplishments/certificate/NFBL9V5UJH6P"
            time="Jun 2023"
          />





        </ul>
      </div>
    </div>
  );
};

export default Certificate;
