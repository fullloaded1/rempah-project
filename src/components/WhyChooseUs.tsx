'use client'

import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation'

const WhyChooseUs = () => {
  const [featuresRef, featuresVisible] = useScrollAnimation(0.2)
  const [statsRef, statsVisible] = useScrollAnimation(0.3)
  
  const yearsCount = useCountUp(25, 2000, statsVisible)
  const farmersCount = useCountUp(500, 2500, statsVisible)
  const countriesCount = useCountUp(40, 1800, statsVisible)
  const satisfactionCount = useCountUp(99, 1500, statsVisible)
  const features = [
    {
      id: 1,
      title: 'Directly Sourced',
      description: 'We partner directly with local farmers, ensuring authenticity and fair trade practices that benefit both our partners and your business.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Premium Quality',
      description: 'A rigorous selection process guarantees only the finest spices reach your business, maintaining consistent excellence in every shipment.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Sustainable Practices',
      description: 'Committed to eco-friendly farming that preserves Indonesia\'s natural heritage while ensuring long-term supply chain stability.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ]

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A4031] mb-4">
            Authenticity, Quality, and Trust
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            Built on decades of expertise and relationships with Indonesian farmers, 
            we deliver more than just spices—we deliver a partnership you can trust.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`text-center group transition-all duration-700 ${
                index === 1 ? 'md:border-x md:border-[#2A4031]/10 md:px-8' : ''
              } ${
                featuresVisible 
                  ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-lg text-[#D97706] group-hover:text-[#B45309] group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#2A4031] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[#4B5563] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div 
          ref={statsRef}
          className={`mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl transition-all duration-800 ${
            statsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="font-heading text-3xl lg:text-4xl font-bold text-[#D97706] mb-2 group-hover:scale-110 transition-transform duration-200">
                {yearsCount}+
              </div>
              <div className="text-[#4B5563] font-medium">
                Years Experience
              </div>
            </div>
            
            <div className="group">
              <div className="font-heading text-3xl lg:text-4xl font-bold text-[#D97706] mb-2 group-hover:scale-110 transition-transform duration-200">
                {farmersCount}+
              </div>
              <div className="text-[#4B5563] font-medium">
                Partner Farmers
              </div>
            </div>
            
            <div className="group">
              <div className="font-heading text-3xl lg:text-4xl font-bold text-[#D97706] mb-2 group-hover:scale-110 transition-transform duration-200">
                {countriesCount}+
              </div>
              <div className="text-[#4B5563] font-medium">
                Countries Served
              </div>
            </div>
            
            <div className="group">
              <div className="font-heading text-3xl lg:text-4xl font-bold text-[#D97706] mb-2 group-hover:scale-110 transition-transform duration-200">
                {satisfactionCount}%
              </div>
              <div className="text-[#4B5563] font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
