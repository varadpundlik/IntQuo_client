import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-black fixed top-0 left-0 w-full z-30 border border-white rounded-3x1">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            {/* <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li> */}
            <li>
              <a>Prepare</a>
            </li>
            <li>
              <a>Interview</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">IntQuo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          {/* <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li> */}
          <li>
            <a>Prepare</a>
          </li>
          <li>
            <a>Interview</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Use Link from Next.js for navigation */}
        <Link href="/Login">
          <div className="text-blue-100 p-4">Login</div>
        </Link>
        <Link href="/register">
          <button className="btn bg-yellow-200 text-black">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
