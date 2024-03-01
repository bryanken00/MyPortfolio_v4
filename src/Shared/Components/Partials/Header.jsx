import React from 'react'
import { useEffect, useState } from 'react';

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)

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

  const colorTrue = "#A7727D" // isScrolled
  const colorFalse = "#867070" // notScrolled

  const textChanger = () => {
    if (isScrolled) {
      return colorTrue
    } else {
      return colorFalse
    }
  }

  return (
    <header className={`bg-[#F8E8EE] fixed w-full text-white py-4 px-10 ${isScrolled ? 'bg-cyan-700' : 'bg-cyan-700 bg-opacity-0'}`} style={{ transition: 'background-color 0.3s' }}>
      <nav className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <a href="/" className={`text-xl text-[${textChanger()}] font-bold mb-4 lg:mb-0`}>Home</a>
        <div>
          {console.log(textChanger())}
          <a href="/Project" className={`text-[${textChanger()}] hover:text-gray-300 mr-4`}>Projects</a>
          <a href="/Resume" className={`text-[${textChanger()}] hover:text-gray-300 mr-4`}>Resume</a>
          <a href="/Contact" className={`text-[${textChanger()}] hover:text-gray-300`}>Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header