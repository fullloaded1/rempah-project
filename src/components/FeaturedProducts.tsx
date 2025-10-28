'use client'

import { smoothScrollTo } from '@/utils/smoothScroll'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const FeaturedProducts = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2)
  const [gridRef, gridVisible] = useScrollAnimation(0.1)
  const products = [
    {
      id: 1,
      name: 'Sumatran Cinnamon',
      image: '/images/cinnamon.jpg',
      description: 'Sweet and aromatic bark from the highlands of Sumatra, known for its distinctive warm flavor and therapeutic properties.',
      origin: 'Sumatra, Indonesia'
    },
    {
      id: 2,
      name: 'Moluccan Clove',
      image: '/images/clove.jpg',
      description: 'Hand-picked flower buds from the Spice Islands, delivering intense aroma and the perfect balance of sweetness and warmth.',
      origin: 'Maluku Islands, Indonesia'
    },
    {
      id: 3,
      name: 'Lampung Black Pepper',
      image: '/images/pepper.jpg',
      description: 'Bold and pungent peppercorns from Lampung province, offering a sharp heat that enhances any culinary creation.',
      origin: 'Lampung, Indonesia'
    }
  ]

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A4031] mb-4">
            Our Finest Selections
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            Discover our premium collection of Indonesian spices, each carefully selected 
            and processed to deliver exceptional quality and authentic flavors to your business.
          </p>
        </div>

        {/* Products Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-[#F8F5F2] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                gridVisible 
                  ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Product Image */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Product Content */}
              <div className="p-6 lg:p-8">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[#D97706] bg-[#D97706]/10 rounded-full">
                    {product.origin}
                  </span>
                </div>
                
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#2A4031] mb-3">
                  {product.name}
                </h3>
                
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  {product.description}
                </p>

                <button className="inline-flex items-center text-[#D97706] font-semibold hover:text-[#B45309] transition-colors duration-200">
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#4B5563] mb-6">
            Interested in our complete product range?
          </p>
          <button
            onClick={() => smoothScrollTo('contact', 80)}
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-[#2A4031] rounded-lg hover:bg-[#1F2E24] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            View Full Catalog
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
