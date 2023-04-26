import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/1111.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../component/Skills"
import Experience from "../component/Experience"
import Education from "@/component/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Madura Prasad | About page</title>
        <meta name="description" content="Madura Prasad" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Exploring my Background, Skills and Passion."
            className="mb-16 cursor-pointer"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="text-justify font-semibold cursor-pointer">
                Hello, I am Madura Prasad, Im a highly motivated software
                engineering graduate with a Bachelor of Science degree. I have
                experience with various programming languages, including Java,
                PHP, Springboot, HTML, MYSQL, OOP, Javascript, Android App
                Development, React JS, and React Native. My career objective is
                to become a successful software engineer by using my knowledge
                and skills to develop innovative software solutions that address
                the requirements of businesses and end-users. With their
                education and experience, Madura Prasad is well-positioned to
                achieve their professional goals and excel in the software
                engineering industry.
              </p>
            </div>

            <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Madura Prasad"
                className="w-80 h-90 rounded-2xl cursor-pointer"
                priority sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between cursor-pointer">
              <div className="flex flex-col items-end justify-center ">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={34} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={18} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
