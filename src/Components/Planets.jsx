import Data from "../data.json";
import { useParams } from "react-router-dom";
import PlanetsMobile from "./PlanetsMobile";
function Planets() {
  const { name } = useParams();

  const foundedPlanet = Data.destinations.filter((planet) => planet.name.toLowerCase() === name)
  
  return (
    <div>
      {foundedPlanet.map((planet) => {
        return (
          <>
          <div className="flex pt-6 bellowlg:hidden">
            <div className="w-full">
              <img src={planet.images.png} alt="Moon" />
            </div>
            <div className="text-start w-full">
              <h1 className="text-[100px] font-custom uppercase">
                {planet.name}
              </h1>
              <p className="leading-8 font-default">{planet.description}</p>
              <div className="h-[1px] bg-slate-700 my-7"></div>
              <div className="flex justify-between uppercase w-3/4 font-custom">
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
            <div className="lg:hidden">
              <PlanetsMobile />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Planets;
