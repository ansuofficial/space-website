import { NavLink, Outlet } from "react-router-dom";
import Data from "../data.json";
function Destination() {
  return (
    <>
      <div className="bg-destinationMobile lg:bg-destinationDesktop h-[120vh]  lg:h-screen w-full bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1060px] mx-auto text-white flex items-center">
          <div className="mt-[110px] w-full">
            <h1 className="lg:text-[28px] bellowlg:text-[21px] font-default tracking-wider uppercase bellowlg:px-2">
              <span className="text-slate-700">01</span> Pick your destination
            </h1>

            <div className="">
              <div className="flex justify-center lg:flex lg:justify-end">
                <div className="space-x-12 md:w-2/4 bellowlg:text-center font-custom uppercase bellowlg:mt-6">
                  {Data.destinations.map((destination) => {
                    return (
                      <NavLink
                        to={`/destination/${destination.name.toLowerCase()}`}
                        className={({ isActive }) =>
                          `cursor-pointer hover:border-b py-2 ${
                            isActive ? "border-b" : ""
                          }`
                        }
                      >
                        {destination.name}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
