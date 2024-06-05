import { NavLink } from "react-router-dom";
import MenuIcon from "/shared/icon-hamburger.svg";
import Close from "/shared/icon-close.svg";
import React from "react";

function MobileLayout() {
  const [menu, setshowmenu] = React.useState(true);

  return (
    <div className="text-white mr-4 ring">
      <div className="w-full flex justify-end cursor-pointer">
        {menu ? (
          <img
            onClick={() => setshowmenu(false)}
            className="w-7"
            src={MenuIcon}
            alt=""
          />
        ) : (
          <img
            onClick={() => setshowmenu(true)}
            className="w-7 hover:rotate-180 transition-transform"
            src={Close}
            alt=""
          />
        )}
      </div>
      <div
        className={`${
          menu ? "hidden" : ""
        } md:justify-evenly uppercase font-custom text-sm lg:text-[16px] flex flex-col items-start  bg-slate-800 opacity-70 w-[200px] px-4`}
      >
        <NavLink
          to="/"
          onClick={() => setshowmenu(true)}
          className={({ isActive }) =>
            `cursor-pointer hover:border-b-2 py-6 ${
              isActive ? "border-b-2" : ""
            }`
          }
        >
          <span className="font-bold">00 </span>Home
        </NavLink>
        <NavLink
          to={"/destination/moon"}
          onClick={() => setshowmenu(true)}
          className={({ isActive }) =>
            `cursor-pointer hover:border-b-2 py-6 ${
              isActive ? "border-b-2" : ""
            }`
          }
        >
          <span className="font-bold">01 </span>Destination
        </NavLink>
        <NavLink
          to={"/crew"}
          onClick={() => setshowmenu(true)}
          className={({ isActive }) =>
            `cursor-pointer hover:border-b-2 py-6 ${
              isActive ? "border-b-2" : ""
            }`
          }
        >
          <span className="font-bold">02 </span>Crew
        </NavLink>
        <NavLink
          to={"/technology"}
          onClick={() => setshowmenu(true)}
          className={({ isActive }) =>
            `cursor-pointer hover:border-b-2 py-6 ${
              isActive ? "border-b-2" : ""
            }`
          }
        >
          <span className="font-bold py-6 ">03 </span>Technology
        </NavLink>
      </div>
    </div>
  );
}

export default MobileLayout;
