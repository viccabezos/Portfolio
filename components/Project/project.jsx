import Image from "next/image";
import Github from "../../public/github.svg";
import { project } from "../../API/requests";
import { useQuery } from "react-query";
import { useEffect } from "react";

export default function Project({ name, description, github, id }) {
  const { data: stacks } = useQuery(["projectStacks", id], () =>
    project.getStacks(id)
  );

  const { data: pictures } = useQuery(["picturesProjects", id], () =>
    project.getPictures(id)
  );

  const { data: formation } = useQuery(["formationProjects", id], () =>
    project.getFormation(id)
  );

  useEffect(() => {
    console.log(stacks);
  });

  return (
    <div className="portfolio flex flex-col justify-center h-auto mb-5 w-full">
      <div className="flex m-5 justify-center ">
        <div className="border border-gray-400 rounded-md h-64 w-1/2 px-8 py-4 hover:ring-4 hover:ring-gray-400">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-sm font-light">{description}</p>
          <p>{formation?.name}</p>

          <div>
            {pictures?.map((picture) => {
              return (
                <Image src={picture.url} width={"200px"} height={"200px"} />
              );
            })}
          </div>

          <button>
            <a href={github}>
              <Image src={Github} width={40} height={40} />
            </a>
          </button>
          <div>
            {stacks?.map((stack) => {
              return (
                <div className="flex flex-row" key={stack.id}>
                  <p className="text-xs">{stack.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
