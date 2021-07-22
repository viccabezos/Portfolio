import Head from "next/head";
import Header from "../Header/header";
import SideBar from "../Sidebar/sidebar";

const react = require("react");

export default function Layout({ page, children }) {
  return (
    <div className="layout w-full">
      <Head>
        <title>{page}</title>
      </Head>
      <Header />
      <div className="flex flex-row">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
