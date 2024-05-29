import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "/shared/logo.svg";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function Layout() {
  return (
    <div className="h-dvh overflow-hidden ">
      <div className="absolute w-full py-8">
        <div className="flex justify-between md:items-center">
          <div className="md:flex md:items-center md:space-x-24 md:w-2/3 ml-14">
            <img className="w-10" src={Logo} alt="" />
            <div className=" lg:h-[1px] lg:w-1/3 lg:bg-slate-600 lg:absolute"></div>
          </div>
          <div className="w-full bg-slate-800 opacity-70 bellowmd:hidden">
            <div>
              <DesktopLayout />
            </div>
          </div>
          <div className="md:hidden">
            <MobileLayout />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
