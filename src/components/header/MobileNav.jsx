import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container fixed flex justify-between my-10 md:hidden">
        <img src={logo} alt="easy-bank-logo" />
        <button onClick={() => setIsOpen((prevState) => !prevState)}>
          <img src={hamburger} className="h-4" alt="hamburger menu button" />
        </button>
      </div>
      {isOpen && <div>mobile menu</div>}
    </>
  );
}
