import Image from "next/image";
import plage from "../../public/pexels-pixabay-533923.jpg";
import me from "../../public/me.jpg";
export default function Header() {
  return (
    <div className="header bg-gray-900  flex-col w-full h-150 pt-10 pb-4 flex items-center justify-center">
      <div className=" rounded-full border-4 justify-center flex">
        <Image
          src={me}
          width={250}
          height={250}
          className="rounded-full  "
          alt="Me "
        />
      </div>
    </div>
  );
}
