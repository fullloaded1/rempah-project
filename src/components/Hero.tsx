'use client'

import { smoothScrollTo } from '@/utils/smoothScroll'
import { useParallax } from '@/hooks/useScrollAnimation'

const Hero = () => {
  const offsetY = useParallax()
  
  const scrollToContact = () => {
    smoothScrollTo('contact', 80)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat parallax-element"
          style={{
            backgroundImage: 'url(/images/hero-plantation.jpg)',
            transform: `translateY(${offsetY * 0.5}px)`,
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          The Soul of Indonesian Spices,{' '}
          <span className="text-[#D97706] animate-fade-in-up animate-delay-200">Delivered Globally</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto opacity-90 animate-fade-in-up animate-delay-300">
          Your trusted partner for premium, ethically-sourced spices directly from the archipelago's heart.
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#D97706] rounded-lg hover:bg-[#B45309] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#D97706] focus:ring-opacity-50 animate-fade-in-up animate-delay-500"
        >
          Request Our Catalog
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* Floating spice particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D97706] rounded-full animate-float animate-delay-100 opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-float animate-delay-300 opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#D97706] rounded-full animate-float animate-delay-500 opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-float animate-delay-200 opacity-30"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
