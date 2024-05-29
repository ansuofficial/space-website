import {NavLink} from "react-router-dom"
function DesktopLayout() {
  return (
    <div className="text-white flex justify-evenly uppercase font-custom text-sm lg:text-[16px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `cursor-pointer hover:border-b-2 py-6 ${isActive ? "border-b-2" : ""}`
        }
      >
        <span className="font-bold">00 </span>Home
      </NavLink>
      <NavLink
        to={"/destination/moon"}
        className={({ isActive }) =>
          `cursor-pointer hover:border-b-2 py-6 ${isActive ? "border-b-2" : ""}`
        }
      >
        <span className="font-bold">01 </span>Destination
      </NavLink>
      <NavLink
        to={"/crew"}
        className={({ isActive }) =>
          `cursor-pointer hover:border-b-2 py-6 ${isActive ? "border-b-2" : ""}`
        }
      >
        <span className="font-bold">02 </span>Crew
      </NavLink>
      <NavLink
        to={"/technology"}
        c
        className={({ isActive }) =>
          `cursor-pointer hover:border-b-2 py-6 ${isActive ? "border-b-2" : ""}`
        }
      >
        <span className="font-bold py-6 ">03 </span>Technology
      </NavLink>
    </div>
  );
}

export default DesktopLayout