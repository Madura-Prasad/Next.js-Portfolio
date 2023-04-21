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
      viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
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
            className="mb-16"
          />
          <ul>
            <Article title="Test" date="Test" link="/" />

            <Article title="Test" date="Test" link="/" />
            <Article title="Test" date="Test" link="/" />
            <Article title="Test" date="Test" link="/" />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
