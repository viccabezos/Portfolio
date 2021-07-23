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

  useEffect(() => {
    console.log(stacks);
  });

  return (
    <div className="portfolio flex flex-col justify-center h-auto mb-10 w-full">
      <div className="flex m-10 justify-center ">
        <div className="border border-gray-600 rounded-md h-80 w-1/2 px-8 py-4">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm font-light">{description}</p>

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
                <div className="flex flex-row">
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
