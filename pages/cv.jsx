import { job, formation } from "../API/requests";
import { useQuery } from "react-query";

import Image from "next/image";
import github from "../public/github.svg";

import Job from "../components/Job/job";

export const getServerSideProps = async () => {
  const [resJobs, resFormations] = await Promise.all([
    job.getAll(),
    formation.getAll(),
  ]);

  return {
    props: { jobs: resJobs, formations: resFormations },
  };
};

export default function Portfolio({ jobs, formations }) {
  return (
    <div className="portfolio flex flex-row font-light tracking-widest mb-10 w-full">
      <div className=" flex flex-col w-2/3">
        <h1 className=" text-5xl ml-5 mt-5 text-gray-900"> Experience. </h1>
        <div className="flex h-auto flex-row flex-wrap justify-center w-full">
          {jobs?.map((job) => {
            return <Job {...job} key={job.id} />;
          })}
        </div>
      </div>
      <div className="flex flex-col w-1/3  ">
        <h2 className=" text-5xl ml-5 mt-5 text-gray-900">Formations .</h2>
        <div className="flex flex-col  justify-center   text-left p-5">
          {formations.map((formation) => {
            return (
              <div className="space-y-2 flex  items-center  space-x-2">
                <p className=" ">{formation.name}</p>
                <p className="">{formation.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
