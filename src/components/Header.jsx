import React from "react";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="container flex items-center justify-between my-10">
      <img src={logo} className="h-fit" alt="easybank logo" />
      <ul className="flex gap-8">
        {["Home", "About", "Contact", "Blog", "Careers"].map((link, index) => (
          <li key={index} className="cursor-pointer text-text hover:text-darkBlue">
            {link}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="px-8 py-3 font-bold text-white rounded-full bg-gradient-to-r from-limeGreen to-brightCyan"
      >
        Request Invite
      </button>
    </div>
  );
}
