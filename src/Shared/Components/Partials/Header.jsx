import React from 'react'
import { useEffect, useState } from 'react';

const Header = () => {

  const [ isScrolled, setIsScrolled   ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const headercolorScrolled = 'custom-headercolorScrolled';
  const headercolorNotScrolled = 'custom-headercolorNotScrolled';

  const textChanger = () => {
    if (isScrolled) {
      return headercolorScrolled
    } else {
      return headercolorNotScrolled
    }
  }

  const transition = () => {
    return "transition duration-500 transform hover:scale-150"
  }

  return (
    <header className={`bg-custom-headerColorBG fixed w-full py-4 px-10 ${isScrolled ? ' shadow-md bg-cyan-700' : 'bg-cyan-700 bg-opacity-0'}`} style={{ transition: 'background-color 0.3s' }}>
      <nav className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <a href="/" className={`text-xl text-${textChanger()} font-bold mb-4 lg:mb-0 ${transition()}`}>Home</a>
        <div>
          <a href="/Project" className={`text-${textChanger()} hover:text-black mr-4`}>Projects</a>
          <a href="/Resume" className={`text-${textChanger()} hover:text-black-300 mr-4`}>Resume</a>
          <a href="/Contact" className={`text-${textChanger()} hover:text-black-300`}>Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header