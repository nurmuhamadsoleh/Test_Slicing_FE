import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const Search = () => {
  let iconStyles = {
    color: "white",
    // fontSize: "500px",
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    padding: 5,
  };
  return (
    <div className="w-screen mt-10">
      <div className="bg-[#C0226D] rounded-t-2xl h-16 flex items-center justify-start p-3 mb-6">
        <h1 className="capitalize text-[26px] text-[#FFF]">Beranda</h1>
      </div>
      <span className="flex m-4">
        <BiSearchAlt
          size={50}
          className="text-[#FFF] w-12 h-12 bg-[#D9D9D9] p-2 rounded-l-lg"
        />
        <input
          type="text"
          className="w-full outline-none rounded-r-lg p-1 mr-5"
          placeholder="Pencarian"
          autoFocus
        />
        <IoMdArrowDropdown
          size={50}
          className="text-[#FFF] w-12 h-12 bg-[#D9D9D9] p-2 rounded-lg"
        />
      </span>
      {/* <div className="flex text-[#FFF]">
      </div> */}
    </div>
  );
};

export default Search;
