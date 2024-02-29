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

  return (
    <header className={`bg-cyan-700 fixed w-full text-white py-4 px-10 ${isScrolled ? 'bg-cyan-700' : 'bg-cyan-700 bg-opacity-0'}`} style={{ transition: 'background-color 0.3s' }}>
      <nav className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <a href="/" className="text-xl font-bold mb-4 lg:mb-0">Home</a>
        <div>
          <a href="/Project" className="text-white hover:text-gray-300 mr-4">Projects</a>
          <a href="/Resume" className="text-white hover:text-gray-300 mr-4">Resume</a>
          <a href="/Contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header