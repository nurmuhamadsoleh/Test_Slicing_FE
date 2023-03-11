import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Top from "./Top";

const Layout = () => {
  return (
    <div className=" mb-10 lg:mx-0">
      <div id="page" className="w-screen">
        <Top />
        <div className="bg-white  flex justify-center py-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
