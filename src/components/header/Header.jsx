import React from "react";
import MobileNav from "./MobileNav";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <>
      <nav className="container fixed items-center justify-between hidden my-10 md:flex md:static">
        <img src={logo} className="h-fit" alt="easybank logo" />
        <div className="flex gap-8">
          {["Home", "About", "Contact", "Blog", "Careers"].map((link, index) => (
            <a href="/" key={index} className="text-text hover:text-darkBlue" onClick={(e) => e.preventDefault()}>
              {link}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="px-8 py-3 font-bold text-white rounded-full bg-gradient-to-r from-limeGreen to-brightCyan"
        >
          Request Invite
        </button>
      </nav>

      <MobileNav />
    </>
  );
}
