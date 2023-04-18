import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-justify">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-5">
          <Details
            type="BSc in Software Engineering"
            time="2022-2023"
            place="ICBT Campus (Cardiff Metropolitan University) - Colombo 04"
            info="As a graduate of the Bachelor of Science in Software Engineering program, I possess a deep understanding of software design, development, and maintenance. With I strong foundation in computer science, programming languages, and software development methodologies, I am well-equipped to meet industry standards and customer requirements in designing and developing software applications. I am prepared to contribute to the advancement of the field through I have knowledge and expertise in software engineering principles."
          />

          <Details
            type="HD in Computing and Software Engineering"
            time="2020-2022"
            place="ICBT Campus - Colombo 04"
            info="As a graduate of the Higher Diploma in Software Engineering program, I have developed a solid foundation in software development, programming languages, and software engineering principles. I possess practical skills in designing, developing, and testing software applications, and are prepared to contribute to the industry through I have knowledge and expertise.  education has equipped I to meet the demands of a rapidly evolving technological landscape."
          />

          <Details
            type="Advanced Level"
            time="2016-2019"
            place="Mahanama College - Colombo 03"
            info="As a graduate of the Advance level in Commerce stream, I have gained a deep understanding of business principles and practices. I possess practical skills in financial accounting, economics, and business management, and are well-equipped to pursue further studies in commerce or enter the workforce. I'm education has prepared for a wide range of careers in the business world."
          />

          <Details
            type="Ordinary Level"
            time="2012-2015"
            place="Mahanama College - Colombo 03"
            info="As a graduate of the Ordinary level, I have completed a crucial stage of I education. I have gained a foundational understanding of various subjects and developed essential skills such as reading, writing, and arithmetic. I'm education has prepared to pursue further studies or enter the workforce with basic knowledge and skills."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
