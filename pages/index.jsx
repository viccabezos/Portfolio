import Head from "next/head";
import Header from "../components/Header/header";
import SideBar from "../components/Sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" p-10">
        <p className="text-lg text-justify font-light tracking-widest">
          Hi! My name is Victoria, <br />
          and an ocean lover, for me coding is deeping down the internet, my
          second passion.
          <br /> Creativity, patience, and self-giving are required in both
          passions, the complexity of the net and the structures required for a
          Dev to create something remembers me somehow the ocean ecosytem
          structures.
          <br /> Coding is somethig quite new for me, and old playground from
          school that covid (and his lockdowns) has brought me back, and i feel
          lucky to be part of this adventure thanks to the Wild Code School.
          <br /> I invite you to have a look through my portfolio and discover
          some of the coding that i have been working on, you can find my
          Curriculum aswell if you wish to know more about my work experiences.
        </p>
      </div>
      <div className="flex justify-center space-x-10 mt-20">
        <button className="bg-gray-900 font-light tracking-widest text-white p-2 w-52 rounded-md focus:outline-none hover:bg-gray-800 hover:ring-4 hover:ring-gray-400 ">
          <a href="/portfolio">{`Visit my Portfolio`}</a>
        </button>
        <button className="bg-gray-900 font-light tracking-widest text-white p-2 w-52 rounded-md focus:outline-none hover:bg-gray-800 hover:ring-4 hover:ring-gray-400 ">
          <a href="/cv">Visit my CV</a>
        </button>
      </div>
    </div>
  );
}
