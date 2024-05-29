import React from "react";
import Data from "../data.json";
import TechnologyMobile from "../Components/TechnologyMobile";

function Technology() {
  const [technology, settechnology] = React.useState(0);
  const next = () => {
    return settechnology((prevSlide) =>
      prevSlide === Data.technology.length - 1 ? 0 : prevSlide + 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  });

  const current = Data.technology[technology];

  return (
    <div className="lg:bg-technologyDesktop bg-technologyMobile h-screen w-full bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1060px] mx-auto w-[90%] text-white flex items-center bellowlg:hidden">
        <div className="mt-[110px] w-full">
          <h1 className="text-[28px] font-default tracking-wider uppercase">
            <span className="text-slate-700">02</span> Meet your crew
          </h1>

          <div className="flex h-[500px]">
            <div className="flex items-center gap-x-12 w-full">
              <div className="flex flex-col space-y-10 ">
                {Data.technology.map((_, index) => (
                  <div
                    onClick={() => settechnology(index)}
                    className={`w-12 h-12 rounded-full ring-1 ring-white flex items-center justify-center cursor-pointer ${
                      technology === index
                        ? "bg-white text-black font-bold font-custom"
                        : "font-default"
                    }`}
                  >
                    <span>{index}</span>
                  </div>
                ))}
              </div>
              <div>
                <div>
                  <h1 className="uppercase font-custom tracking-wider">
                    The Technology
                  </h1>
                </div>
                <div>
                  <h1 className="text-[46px] font-custom uppercase pb-4">
                    {current.name}
                  </h1>
                  <p className="w-4/4 font-default ">{current.description}</p>
                </div>
              </div>
            </div>
            <div className="relative w-full flex justify-end">
              <img
                className="absolute w-[480px]"
                src={current.images.portrait}
                alt="current.images.portrai"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <TechnologyMobile />
      </div>
    </div>
  );
}

export default Technology;
