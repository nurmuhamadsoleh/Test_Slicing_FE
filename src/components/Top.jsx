import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlinePieChart, AiOutlineHome } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { BiNotepad, BiDollarCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const Top = () => {
  const { pathname } = useLocation();
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <div className="bg-[#C0226D] rounded-b-2xl text-[#FFF]">
      <ul className="flex justify-around items-center h-16 gap-3">
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <img src={Logo} alt="Profile" width="80px" className="mt-3" />
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <div className="flex items-center flex-col">
              <AiOutlineHome size={30} />
              <span>Beranda</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <div className="flex items-center flex-col">
              <AiOutlinePieChart size={20} color={"#FFF"} />
              <span>Dashboard</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <div className="flex items-center flex-col">
              <BsCart3 size={20} color={"#FFF"} />
              <span>Transaksi</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <div className="flex items-center flex-col">
              <BiNotepad size={20} color={"#FFF"} />
              <span>Laporan</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <div className="flex items-center flex-col">
              <FiSettings size={20} color={"#FFF"} />
              <span>Master Data</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <div className="flex items-center flex-col">
              <BiDollarCircle size={20} color={"#FFF"} />
              <span>Finance</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className={`${pathname == "/" ? "font-bold" : ""}`}>
            <img src={Profile} alt="Profile" width="40px" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Top;
