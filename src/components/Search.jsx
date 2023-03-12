import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const Search = ({ handle, setquery }) => {
  //   let [query, setQuery] = useState([]);
  //   let [keyword, setKeyword] = useState([]);
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     setKeyword(query);
  //   };
  let iconStyles = {
    color: "white",
    // fontSize: "500px",
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    padding: 5,
  };
  //   console.log("data search", data);
  return (
    <div className="w-screen pt-10">
      <div className="bg-[#C0226D] rounded-t-2xl h-16 flex items-center justify-start p-3 mb-6">
        <h1 className="capitalize text-[26px] text-[#FFF]">Beranda</h1>
      </div>
      <form onSubmit={handle} className="flex m-4">
        <button type="submit">
          <BiSearchAlt
            size={50}
            className="text-[#000] w-12 h-12 bg-[#D9D9D9] p-2 rounded-l-lg cursor-pointer"
          />
        </button>
        <input
          type="text"
          className="w-full outline-none rounded-r-lg p-1 mr-5"
          placeholder="Pencarian"
          autoFocus
          onChange={(e) => setquery(e.target.value)}
        />
        <IoMdArrowDropdown
          size={50}
          className="text-[#000] w-12 h-12 bg-[#D9D9D9] p-2 rounded-lg"
        />
      </form>
      {/* <div className="flex text-[#FFF]">
      </div> */}
    </div>
  );
};

export default Search;
