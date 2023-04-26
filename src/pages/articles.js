import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Article = ({ title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 cursor-pointer
    "
    >
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
      </Link>
      <span className="text-red-500 font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Madura Prasad | Articles page</title>
        <meta name="description" content="Madura Prasad" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Collection of My Published Articles."
            className="mb-16 cursor-pointer"
          />
          <ul>
            <Article
              title="Mastering Spring Boot: A Guide to Building Robust Java Web Applications"
              date="2023 Apr 16"
              link="https://medium.com/@maduraprasad/mastering-spring-boot-a-guide-to-building-robust-java-web-applications-dc5f4cf8b19c"
            />
            <Article
              title="Getting started with Java Spring Boot data testing using Postman"
              date="2023 Apr 4"
              link="https://medium.com/@maduraprasad/getting-started-with-java-spring-boot-data-testing-using-postman-fb9cdfac5266"
            />

            <Article
              title="Building a RESTful API with Java Spring Boot and CRUD Operations"
              date="2023 Mar 30"
              link="https://medium.com/@maduraprasad/building-a-restful-api-with-java-spring-boot-and-crud-operations-5c17d2ef8e84"
            />

            <Article
              title="The Basics of Spring Component Scanning and Annotations"
              date="2023 Mar 29"
              link="https://medium.com/@maduraprasad/the-basics-of-spring-component-scanning-and-annotations-e531d48c0331"
            />

            <Article
              title="The Ultimate Guide to Becoming a Java Spring Boot Developer"
              date="2023 Mar 23"
              link="https://medium.com/@maduraprasad/the-ultimate-guide-to-becoming-a-java-spring-boot-developer-dbd4415ee993"
            />

            <Article
              title="A Beginner’s Guide to Starting a Career in React Native Development"
              date="2023 Mar 12"
              link="https://medium.com/@maduraprasad/a-beginners-guide-to-starting-a-career-in-react-native-development-b8db3d7774c"
            />

            <Article
              title="9 Outstanding JavaScript Projects for Your CV"
              date="2023 Feb 19"
              link="https://medium.com/@maduraprasad/nine-outstanding-javascript-projects-for-your-cv-dc6c34c18992"
            />

            <Article
              title="SE Student Final Year Project Ideas"
              date="2023 Feb 02"
              link="https://medium.com/@maduraprasad/se-student-final-year-pr-ff01e6d3f2de"
            />

            <Article
              title="Learn Android App Development for Beginners: Create Your First App"
              date="2023 Jan 29"
              link="https://medium.com/@maduraprasad/a-simple-calculator-app-this-project-can-help-beginner-app-developers-understand-the-basics-of-291d48800012"
            />

            <Article
              title="A Detailed Comparison of React Native and Flutter for Mobile App Development"
              date="2023 Jan 24"
              link="https://medium.com/@maduraprasad/react-native-and-flutter-are-two-popular-frameworks-for-building-mobile-apps-d6de9aa5285b"
            />

            <Article
              title="Effective Error Handling in React: A Developer’s Guide"
              date="2023 Jan 24"
              link="https://medium.com/@maduraprasad/error-handling-is-a-necessary-component-of-any-software-development-process-97598f9fe65e"
            />

            <Article
              title="5 Proven Strategies for Optimizing Your React App’s Performance"
              date="2023 Jan 24"
              link="https://medium.com/@maduraprasad/use-the-react-developer-tools-the-react-developer-tools-is-a-browser-extension-that-allows-you-to-24f242a50f14"
            />

            <Article
              title="Why We Need JavaScript Frameworks: A Look at the Top 5"
              date="2023 Jan 23"
              link="https://medium.com/@maduraprasad/why-we-need-javascript-frameworks-a-look-at-the-top-5-281edf237542"
            />

            <Article
              title="2023 Web Development Roadmap: Key Technologies and Trends to Watch"
              date="2023 Jan 21"
              link="https://medium.com/@maduraprasad/2023-web-development-roadmap-key-technologies-and-trends-to-watch-19f469da2f49"
            />

            <Article
              title="Is React Native Worth Learning for Mobile App Development?"
              date="2023 Jan 20"
              link="https://medium.com/@maduraprasad/is-react-native-worth-learning-for-mobile-app-development-b62d33154eae"
            />

            <Article
              title="In-Demand and High-Paying Programming Jobs for the Future"
              date="2023 jan 20"
              link="https://medium.com/@maduraprasad/depending-on-criteria-like-location-industry-and-experience-expertise-there-are-a-number-of-33aa3bd238d8"
            />

            <Article
              title="The Impact of AI on Software Engineers: Opportunities and Risks"
              date="2023 Jan 20"
              link="https://medium.com/@maduraprasad/the-ai-revolution-will-definitely-change-a-lot-about-what-software-engineers-do-and-how-they-do-it-ac559fe16ed0"
            />

            <Article
              title="Navigating the Road to Success: How to Choose a Career Path for Students"
              date="2023 jan 19"
              link="https://medium.com/@maduraprasad/choosing-a-career-path-for-a-student-can-be-a-daunting-task-but-with-the-right-guidance-and-f89cf0306e83"
            />

            <Article
              title="Mastering the Art of Writing Clean Code"
              date="2023 Jan 19"
              link="https://medium.com/@maduraprasad/mastering-the-art-of-writing-clean-code-d3d8a573c579"
            />

            <Article
              title="Top Websites Computer Science Students Must Visit"
              date="2023 Jan 19"
              link="https://medium.com/@maduraprasad/top-websites-computer-science-students-must-visit-fdcf45e5538f"
            />

            <Article
              title="Preparing for your Interview: Tips and Tricks for Applying to Software Engineer Jobs in a Foreign Country"
              date="2023 Jan 18"
              link="https://medium.com/@maduraprasad/preparing-for-your-interview-tips-and-tricks-for-applying-to-software-engineer-jobs-in-a-foreign-38bc91f0e41c"
            />

            <Article
              title="The Home-Based Software Developer’s Guide to Earning Passive Income"
              date="2023 Jan 18"
              link="https://medium.com/@maduraprasad/the-home-based-software-developers-guide-to-earning-passive-income-6c658136d9fb"
            />
            <Article
              title="From Resume to Internship: A Guide to Getting a Software Engineering Internship"
              date="2023 Jan 18"
              link="https://medium.com/@maduraprasad/from-resume-to-internship-a-guide-to-getting-a-software-engineering-internship-4c275874e9b"
            />

            <Article
              title="From Beginner to Full Stack Java Developer: A Career Roadmap"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/a-full-stack-java-developer-is-a-highly-experienced-software-engineer-who-can-work-on-both-the-9d4036d4134b"
            />

            <Article
              title="From Beginner to Full Stack Java Developer: A Career Roadmap"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/a-full-stack-java-developer-is-a-highly-experienced-software-engineer-who-can-work-on-both-the-9d4036d4134b"
            />
            <Article
              title="Object-Oriented Programming vs Functional Programming: Which is Better for Your Project?"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/object-oriented-programming-vs-functional-programming-which-is-better-for-your-project-ed4c27dc78f4"
            />

            <Article
              title="Java vs Kotlin: A Comparison of Two Popular Programming Languages for Android Development"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/java-kotlin-pros-and-cons-3e165302eed9"
            />
            <Article
              title="Creating a Strong CV as an IT Fresher: Tips and Tricks"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/how-to-create-a-strong-cv-as-an-it-fresher-5fb1ddb2bc46"
            />
            <Article
              title="A Beginner’s Guide to Android App Development with Android Studio"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/create-first-android-app-using-android-studio-390bbeea559a"
            />

            <Article
              title="Mastering the Art of Online Programming: Strategies for Success"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/how-can-a-programmer-be-successful-on-online-platforms-c31a99cf61ac"
            />

            <Article
              title="From Zero to Hero: A Roadmap for Becoming an Android Developer"
              date="2023 Jan 17"
              link="https://medium.com/@maduraprasad/how-to-become-an-android-developer-a-step-by-step-guide-e1173e6840e3"
            />
            <Article
              title="7 Books You Should Read to Improve Your Software Development Skills"
              date="2023 Jan 16"
              link="https://medium.com/@maduraprasad/7-books-you-should-read-to-improve-your-software-development-skills-2e35b384601d"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
