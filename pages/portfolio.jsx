import { project, stack } from "../API/requests";
import { useQuery } from "react-query";

import Image from "next/image";
import github from "../public/github.svg";
import Project from "../components/Project/project";

export const getServerSideProps = async () => {
  const [resProjects, resStacks] = await Promise.all([
    project.getAll(),
    stack.getAll(),
  ]);

  return {
    props: { project: resProjects, stacks: resStacks },
  };
};

export default function Portfolio({ project, stacks }) {
  return (
    <div className="portfolio flex flex-row font-light tracking-widest mb-10 w-full">
      <div className=" flex flex-col w-2/3">
        <h1 className=" text-5xl ml-5 mt-5 text-gray-900">Portfolio .</h1>
        <div className="flex h-auto flex-row flex-wrap justify-center w-full">
          {project?.map((project) => {
            return <Project {...project} key={project.id} />;
          })}
        </div>
      </div>
      <div className="flex flex-col w-1/3  ">
        <h2 className=" text-5xl ml-5 mt-5 text-gray-900">Stacks .</h2>
        <div className="flex flex-col  justify-center   text-left p-5">
          {stacks.map((stack) => {
            return (
              <div className="space-y-2 flex flex-col items-center ">
                <p className=" ">{stack.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
