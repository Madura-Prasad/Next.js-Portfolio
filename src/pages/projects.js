import AnimatedText from "@/component/AnimatedText";
import { GithubIcon } from "@/component/Icons";
import Layout from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FramerImage=motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return <article className="w-full flex
   items-center justify-between rounded-3xl border
    border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
    <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
    <Link className="w-1/2 cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank"><FramerImage
    whileHover={{scale:1.05}}
      transition={{duration:0.2}}
     src={img} alt={title} className="w-full h-auto"/></Link>
    <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-red-500 font-medium text-xl">{type}</span>
        <Link className="hover:underline underline-offset-2" href={link} target="_blank"><h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2></Link>
        <p className="my-2 font-medium text-dark text-justify">{summary}</p>
        <div className="mt-2 flex items-center ">
            <Link className="w-10 " href={github} target="_blank"><GithubIcon/></Link>
            <Link className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold" href={link} target="_blank">Visit Project</Link>
        </div>
    </div>
  </article>;
};

const Project = ({ type, title, img, link, github }) => {
    return <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
        <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link className="w-full cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank"><FramerImage
      whileHover={{scale:1.05}}
      transition={{duration:0.2}}
       src={img} alt={title} className="w-full h-auto"/></Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-red-500 font-medium text-xl">{type}</span>
          <Link className="hover:underline underline-offset-2" href={link} target="_blank"><h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2></Link>
          <div className="w-full mt-2 flex items-center justify-between ">
          <Link className="text-lg font-semibold underline underline-offset-2" href={link} target="_blank">Visit</Link>
              <Link className="w-8" href={github} target="_blank"><GithubIcon/></Link>
              
          </div>
      </div>
    </article>;
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
      <main className="w-full mb-16 flex flex-col items-end justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Showcase of My Personal Projects." className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
            <FeaturedProject
                title="Live Crypto Tracker"
                img={Project1}
                summary="The live crypto tracker is a mobile app developed using React Native and CoinGecko API that provides real-time cryptocurrency price monitoring. It features a user-friendly interface, customizable watchlists, price alerts, push notifications, and detailed views of each cryptocurrency. The app aims to provide a reliable and convenient tool for crypto enthusiasts to stay up-to-date and make informed investment decisions."
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Featured Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"

            />
            </div>
            <div className="col-span-4">
                <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-12">
            <FeaturedProject
                title="Live Crypto Tracker"
                img={Project1}
                summary="The live crypto tracker is a mobile app developed using React Native and CoinGecko API that provides real-time cryptocurrency price monitoring. It features a user-friendly interface, customizable watchlists, price alerts, push notifications, and detailed views of each cryptocurrency. The app aims to provide a reliable and convenient tool for crypto enthusiasts to stay up-to-date and make informed investment decisions."
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Featured Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"

            />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-12">
            <FeaturedProject
                title="Live Crypto Tracker"
                img={Project1}
                summary="The live crypto tracker is a mobile app developed using React Native and CoinGecko API that provides real-time cryptocurrency price monitoring. It features a user-friendly interface, customizable watchlists, price alerts, push notifications, and detailed views of each cryptocurrency. The app aims to provide a reliable and convenient tool for crypto enthusiasts to stay up-to-date and make informed investment decisions."
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Featured Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"

            />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
            <div className="col-span-4">
            <Project
                title="Live Crypto Tracker"
                img={Project1}
                link="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                type="Project"
                github="https://github.com/Madura-Prasad/Live-Crypto-Tracker.git"
                />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
