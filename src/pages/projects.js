import AnimatedText from "@/component/AnimatedText";
import { GithubIcon } from "@/component/Icons";
import Layout from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import constructionApp from "../../public/images/projects/constructionApp.png";
import Warehouse from "../../public/images/projects/warhouse.png";
import imperial from "../../public/images/projects/imperial.png";
import pos from "../../public/images/projects/pos.png";
import roadtrip from "../../public/images/projects/roadtrip.png";
import woocomerce from "../../public/images/projects/woocomerce.png";
import final from "../../public/images/projects/final.png";
import stress from "../../public/images/projects/stress.png";
import advancepro from "../../public/images/projects/advancedprogamming.png";
import nlp from "../../public/images/projects/nlp.png";
import TransitionEffect from "@/component/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex
    items-center justify-between rounded-3xl border
    border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl  dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,50vw"
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-red-500 font-medium text-xl cursor-pointer  dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold  dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify cursor-pointer  dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link className="w-10 " href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
        priority
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-red-500 font-medium text-xl cursor-pointer  dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            className="text-lg font-semibold underline underline-offset-2 md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Madura Prasad | Projects page</title>
        <meta
          name="description"
          content="Madura Prasad | Projects | GitHub | github"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-end justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Showcase of My Personal Projects."
            className="mb-16 cursor-pointer lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="DocFinder Appointment System"
                img={final}
                summary="The DocFinder Appointment System is a well-rounded final project that incorporates essential software development principles and technologies. It employs role-based authentication for secure user access and utilizes Object-Oriented Programming concepts for a modular and scalable codebase. A Source Control System manages versioning, while unit testing ensures component reliability. Build Servers automate the build process, and coding standards maintain a uniform code style. Loggers capture runtime information for effective debugging, and Java Mail Sender facilitates system communication. Robust exception handling ensures error resilience. In essence, the project integrates these elements to create a secure, efficient, and maintainable healthcare appointment management system, showcasing a comprehensive understanding of key software development practices."
                link="https://github.com/Madura-Prasad/Diabetes-Prediction.git"
                type="Bsc. Final Project (Campus)"
                github="https://github.com/Madura-Prasad/Diabetes-Prediction.git"
              />
            </div>

            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Bumble Bee"
                img={advancepro}
                link="https://github.com/Madura-Prasad/Bumble-Bee-Loan-System.git"
                type="Advanced Programming Project (Campus)"
                github="https://github.com/Madura-Prasad/Bumble-Bee-Loan-System.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="NLP Tweet Disaster"
                img={nlp}
                link="https://github.com/Madura-Prasad/NLP-Machine-Learning-Model.git"
                type="Computational Intelligence Project (Campus)"
                github="https://github.com/Madura-Prasad/NLP-Machine-Learning-Model.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Stress Detection"
                img={stress}
                link="https://github.com/Madura-Prasad/Stress-Detection-ML.git"
                type="Thymeleaf Project (Personal)"
                github="https://github.com/Madura-Prasad/Stress-Detection-ML.git"
              />
            </div>

            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="Imperial Educational Center"
                img={imperial}
                summary="The Imperial College HD Final Project is a web application developed using PHP, JavaScript, jQuery, and MySQL. The goal of the project is to create a platform that allows students to access various resources related to their studies and interact with each other. The platform features a dashboard where students can view their course schedules, grades, and announcements from their professors. Additionally, students can join discussion forums and chat rooms to collaborate with their peers. The platform also includes a search function that allows students to find relevant resources, such as study guides and past exam papers. The system is designed to be user-friendly and intuitive, with a modern and visually appealing interface. Overall, the Imperial College HD Final Project aims to enhance the learning experience for students and facilitate communication and collaboration within the academic community."
                link="https://github.com/Madura-Prasad/Learning-Management-Website.git"
                type="Higher Diploma Final Project (Campus)"
                github="https://github.com/Madura-Prasad/Learning-Management-Website.git"
              />
            </div>

            
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Construction App"
                img={constructionApp}
                link="https://github.com/Madura-Prasad/Construction-App.git"
                type="App Development Project (Campus)"
                github="https://github.com/Madura-Prasad/Construction-App.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Warehouse System"
                img={Warehouse}
                link="https://github.com/Madura-Prasad/Warehouse-Desktop-Application.git"
                type="JAVA OOP Project (Campus)"
                github="https://github.com/Madura-Prasad/Warehouse-Desktop-Application.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="E Commerce Shop POS System"
                img={pos}
                link="https://github.com/Madura-Prasad/E-Commerce-Shop-POS-System.git"
                type="PHP Project (Personal)"
                github="https://github.com/Madura-Prasad/E-Commerce-Shop-POS-System.git"
              />
            </div>
            
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Travel Web Site"
                img={roadtrip}
                link="https://github.com/Madura-Prasad/Travel-WebSite.git"
                type="Web Development Project (Campus)"
                github="https://github.com/Madura-Prasad/Travel-WebSite.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Woo-Commerce Site"
                img={woocomerce}
                link="https://github.com/Madura-Prasad/Laravel-Online-E-Commerce-Store.git"
                type="Laravel Project (Campus)"
                github="https://github.com/Madura-Prasad/Laravel-Online-E-Commerce-Store.git"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
