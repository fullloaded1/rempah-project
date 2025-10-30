'use client'

import { useState, useEffect } from 'react'
import { smoothScrollTo } from '@/utils/smoothScroll'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId, 80)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F2] shadow-lg backdrop-blur-sm'
          : 'bg-black/20 backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-heading text-xl lg:text-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
              isScrolled ? 'text-[#2A4031]' : 'text-white'
            }`}>
              Nusa Terra Spices
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('products')}
                className={`font-heading px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[#2A4031] hover:text-[#D97706]' 
                    : 'text-white hover:text-[#D97706]'
                }`}
              >
                Our Products
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className={`font-heading px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[#2A4031] hover:text-[#D97706]' 
                    : 'text-white hover:text-[#D97706]'
                }`}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-heading bg-[#D97706] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#B45309] transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection('contact')}
              className="font-heading bg-[#D97706] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B45309] transition-all duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
