import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transition = () => {
    return " hover:text-black-300 mr-4 transition duration-500 transform hover:scale-150";
  };

  return (
    <header
      className={`bg-custom-headerColorBG fixed w-full py-4 px-10 z-50 ${
        isScrolled ? " shadow-md bg-custom-headerColorBG" : " bg-opacity-0"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
      <nav className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <a
          href="/"
          className={`${
            isScrolled
              ? "text-custom-headercolorScrolled"
              : "text-custom-headercolorNotScrolled"
          } font-bold mb-4 lg:mb-0 ${transition()}`}
        >
          Home
        </a>
        <div>
          <a
            href="/Project"
            className={`${
              isScrolled
                ? "text-custom-headercolorScrolled"
                : "headercolorNotScrolled"
            } font-bold mb-4 lg:mb-0 ${transition()}`}
          >
            Projects
          </a>
          <a
            href="/Resume"
            className={`${
              isScrolled
                ? "text-custom-headercolorScrolled"
                : "headercolorNotScrolled"
            } font-bold mb-4 lg:mb-0 ${transition()}`}
          >
            Resume
          </a>
          <a
            href="/Contact"
            className={`${
              isScrolled
                ? "text-custom-headercolorScrolled"
                : "headercolorNotScrolled"
            }
            font-bold mb-4 lg:mb-0 ${transition()}`}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
