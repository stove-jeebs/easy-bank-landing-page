import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container fixed flex justify-between my-10 md:hidden">
      <img src={logo} alt="easy-bank-logo" />
      <button onClick={() => setIsOpen((prevState) => !prevState)}>
        <img src={hamburger} className="h-4" alt="hamburger menu button" />
      </button>
      {isOpen && (
        <div className="absolute left-0 w-full h-screen text-center top-32 bg-gradient-to-b from-neutral-400 to-white">
          <div className="container mx-4 my-4 bg-white">mobile nav</div>
        </div>
      )}
    </nav>
  );
}
