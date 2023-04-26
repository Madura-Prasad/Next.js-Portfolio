import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6  shadow-dark cursor-pointer absolute dark:text-dark  dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y, transition:{duration:1.5}}}

    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center cursor-pointer">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-5 shadow-dark cursor-pointer dark:text-dark  dark:bg-light"
          whileHover={{ scale: 1.05 }}
          
        >
          Web / App
        </motion.div>

        <Skill name="React JS" x="-20vw" y="2vw"/>
        <Skill name="HTML" x="-5vw" y="-11vw"/>
        <Skill name="CSS" x="20vw" y="3vw"/>
        <Skill name="JS" x="0vw" y="11.5vw"/>
        <Skill name="PHP" x="-24vw" y="-15vw"/>
        <Skill name="Spring Boot" x="14vw" y="-12vw"/>
        <Skill name="Android" x="29vw" y="-5vw"/>
        <Skill name="React Native" x="0vw" y="-20vw"/>
        <Skill name="Java" x="-25vw" y="18vw"/>
        <Skill name="Firebase" x="18vw" y="17vw"/>
        

      </div>
    </>
  );
};

export default Skills;
