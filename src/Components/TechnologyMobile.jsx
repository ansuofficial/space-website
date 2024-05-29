import React from "react";
import Data from "../data.json";

function TechnologyMobile() {
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
    <div>
      <div className="max-w-[1060px] px-2 mx-auto text-white flex items-center">
        <div className="mt-[110px] w-full">
          <h1 className="text-[21px] font-default tracking-wider uppercase">
            <span className="text-slate-700">02</span> Meet your crew
          </h1>

          <div className="">
            <div className="mt-12">
              <h1 className="uppercase font-custom tracking-wider">
                The Technology
              </h1>
              <h1 className="text-[40px] font-custom uppercase pb-4">
                {current.name}
              </h1>
            </div>
            <div className="flex justify-center">
              <img
                className=" w-full"
                src={current.images.landscape}
                alt="current.images.portrai"
              />
            </div>
            <div className="items-center gap-x-12 w-full">
              <div className="">
                <p className="lg:w-4/4 lg:text-[16px] text-[14px] font-default sm:w-3/4 leading-7 my-4">
                  {current.description}
                </p>
              </div>
              <div className="flex gap-x-10 justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyMobile;
