import Head from "next/head";
import Header from "../components/Header/header";
import SideBar from "../components/Sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full bg-yellow-300">hello</div>
    </div>
  );
}
