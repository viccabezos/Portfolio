export default function SideBar() {
  return (
    <div className="bg-gray-900  w-44 text-white font-light tracking-widest  flex flex-col  text-right">
      <div className="fixed flex flex-col space-y-7 p-5 justify-center  ml-4">
        <button>
          <div className="border-b pb-2">
            <a className="" href="/">
              Home page
            </a>
          </div>
        </button>
        <button>
          <div className="border-b pb-2">
            <a className="" href="/portfolio">
              Portfolio
            </a>
          </div>
        </button>
        <button>
          <div className="border-b pb-2">
            <a className="" href="/cv">
              CV
            </a>
          </div>
        </button>
      </div>
    </div>
  );
}
