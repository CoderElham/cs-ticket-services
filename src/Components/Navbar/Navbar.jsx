import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
       <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <div className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Contact</a></li>
              </div>
              <button className="px-2 py-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md cursor-pointer"> + New Ticket </button>
        </ul>
    </div>
    <a className="text-[22px] font-bold" href="#">CS — Ticket System</a>
  </div>
  <div className=" hidden lg:flex items-center">
          <ul className="flex items-center gap-8">
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Contact</a></li>
            <button className="px-4 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-md cursor-pointer">+ New Ticket</button>
          </ul>
    </div>
      </div>
    </div>
  );
};

export default Navbar;