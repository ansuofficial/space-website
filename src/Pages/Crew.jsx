import React, { useState, useEffect } from "react";
import Data from "../data.json";
import CrewMobile from "../Components/CrewMobile";

function Crew() {
  const [slide, setSlide] = useState(0);

  const next = () => {
    setSlide((prevSlide) =>
      prevSlide === Data.crew.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  const currentCrew = Data.crew[slide];

  return (
    <div
      className="lg:bg-crewDesktop bg-crewMobile h-[115vh] lg:h-screen lg:overflow-hidden w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-[1060px] mx-auto text-white flex items-center bellowlg:hidden">
        <div className="mt-[110px] w-full">
          <h1 className="font-default tracking-wider uppercase text-[28px]">
            <span className="text-slate-700">02</span> Meet your crew
          </h1>
          <div className="flex">
            <div className="flex">
              <div className="mt-[100px]">
                <div>
                  <h3 className="uppercase text-slate-400 text-xl tracking-wider font-custom">
                    {currentCrew.role}
                  </h3>
                </div>
                <div>
                  <h1 className="uppercase text-[50px] font-custom pb-2">
                    {currentCrew.name}
                  </h1>
                </div>
                <div>
                  <p className="leading-7 font-default w-3/4">
                    {currentCrew.bio}
                  </p>
                </div>
                <div className="space-x-6 mt-[90px]">
                  {Data.crew.map((_, index) => (
                    <input
                      key={index}
                      className="accent-white cursor-pointer"
                      type="radio"
                      name="radio"
                      checked={slide === index}
                      onChange={() => setSlide(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="relative w-full">
                <img
                  className="absolute"
                  src={currentCrew.images.png}
                  alt={currentCrew.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <CrewMobile />
      </div>
    </div>
  );
}

export default Crew;
