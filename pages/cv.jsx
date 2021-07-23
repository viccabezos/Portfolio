import { company, job } from "../API/requests";

import { useQuery } from "react-query";
import Image from "next/image";
import github from "../public/github.svg";

export default function Portfolio() {
  const { data } = useQuery(
    "companies",
    "jobs",
    () => company.getAll(),
    job.getAll()
  );
  console.log(data);
  return (
    <div className="portfolio flex flex-col  min-h-screen" key={job.id}>
      <h1>Cv</h1>
      <div className="flex m-10">
        {data?.map((job) => {
          return (
            <div className="border border-gray-600 rounded-md m-2 px-5 py-10">
              <p>{job.name}</p>
              <p>{job.description}</p>
              <button>
                <a href={job.github}>
                  <Image src={github} width={"20px"} alt="github" />
                </a>
              </button>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
