import React, { useState, useEffect } from "react";
import Data from "../data.json";
import backgroundimage from "/crew/background-crew-desktop.jpg";

function CrewMobile() {
  const [slide, setSlide] = useState(0);

  const next = () => {
    setSlide((prevSlide) =>
      prevSlide === Data.crew.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const currentCrew = Data.crew[slide];

  return (
    <div
      style={{ backgroundImage: `url(${backgroundimage})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-[1060px] mx-auto text-white flex items-center">
        <div className="mt-[110px] w-full">
          <h1 className="text-[28px] bellowlg:text-[21px] font-default tracking-wider uppercase bellowlg:px-2 ">
            <span className="text-slate-700">02</span> Meet your crew
          </h1>
          <div className="">
            <div className="">
              <div className="mt-[100px] flex flex-col items-center justify-center">
                <div>
                  <h3 className="uppercase text-slate-400 text-xl bellowlg:text-lg tracking-wider font-custom">
                    {currentCrew.role}
                  </h3>
                </div>
                <div>
                  <h1 className="uppercase text-[50px] font-custom pb-2 bellowlg:text-[40px]">
                    {currentCrew.name}
                  </h1>
                </div>
                <div className="w-full flex justify-center">
                  <img
                    className="w-[250px]"
                    src={currentCrew.images.png}
                    alt={currentCrew.name}
                  />
                </div>
                <div className="md:w-3/4 mt-4">
                  <p className="leading-7 font-default bellowlg:px-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewMobile;


// NOTES USELOADERDATA()
// REACT DAN AND RAYAN