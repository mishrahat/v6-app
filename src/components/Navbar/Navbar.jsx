import React from "react";
import { NavLink } from "react-router-dom";
import github from "../../assets/github.svg";
import search from "../../assets/search.svg";

const Navbar = () => {
  return (
    <div className="sm:flex justify-between items-center hidden">
      <div className="flex items-center gap-4">
        <NavLink to="/">
          <h6 className="font-bold p-3 border border-slate-500 text-4xl">V6</h6>
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink to="/doc" className="text-lg text-red-300">
            Docs
          </NavLink>
          <NavLink className="text-lg text-red-300">FAQ</NavLink>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <NavLink>
          <img
            className="w-[40px] h-1/5 bg-white rounded-[50%]"
            src={github}
            alt=""
          />
        </NavLink>
        <form className="flex bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  rounded-2xl px-2 py-1 items-center">
          <img className="w-[35px]" src={search} alt="" />
          <input
            className="h-[30px] bg-transparent px-1"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
