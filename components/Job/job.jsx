import Image from "next/image";
import Github from "../../public/github.svg";
import { job } from "../../API/requests";
import { useQuery } from "react-query";
import { useEffect } from "react";

export default function Job({ name, description, id }) {
  const { data: companies } = useQuery(["companies", id], () =>
    project.getCompanies(id)
  );

  useEffect(() => {
    console.log(companies);
  });

  return (
    <div className="portfolio flex flex-col justify-center h-auto mb-5 w-full">
      <div className="flex m-10 justify-center ">
        <div className=" rounded-md flex w-full px-8 space-x-2">
          <p className="text-2xl font-bold">{name}</p>
          <p className=" ">{description}</p>

          <div>
            {companies?.map((company) => {
              return (
                <div className="flex flex-row">
                  <p className="text-xs">{company?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
