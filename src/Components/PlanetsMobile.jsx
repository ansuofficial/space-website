import Data from "../data.json";
import { useParams } from "react-router-dom";
function PlanetsMobile() {
  const { name } = useParams();

  const foundedPlanet = Data.destinations.filter(
    (planet) => planet.name.toLowerCase() === name
  );

  return (
    <div>
      {foundedPlanet.map((planet) => {
        return (
          <div className="lg:flex lg:space-x-0 space-y-5 pt-6 bellowlg:px-2">
            <div className=" text-center">
              <h1 className="lg:text-[100px] bellowlg:text-[70px] font-custom uppercase">
                {planet.name}
              </h1>
              <div className="mx-auto  sm:w-2/4">
                <p className="leading-8 font-default">{planet.description}</p>
              </div>
            </div>
            <div className="w-full  flex justify-center">
              <img src={planet.images.png} alt="Moon" />
            </div>
            <div className="text-start w-full">
              <div className="h-[1px] bg-slate-700 my-7"></div>
              <div className="flex justify-between uppercase sm:w-3/4 font-custom mx-auto">
                <div>
                  <span>Avg</span>
                  <h3 className="text-[28px]">{planet.distance}</h3>
                </div>
                <div>
                  <span>Est. Travel Time</span>
                  <h3 className="text-[28px]">{planet.travel}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlanetsMobile;
