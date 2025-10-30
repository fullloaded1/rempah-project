'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const MissionVision = () => {
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>(0.2)
  const [contentRef, contentVisible] = useScrollAnimation<HTMLDivElement>(0.1)

  const missions = [
    {
      id: 1,
      text: 'To introduce the authenticity and excellence of Indonesian spices',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 2,
      text: 'To uphold environmental sustainability',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      text: 'To bring the cultural essence of the Indonesian archipelago',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#F8F5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#D97706]/10 text-[#D97706] rounded-full text-sm font-semibold">
              Our Vision
            </span>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A4031] mb-6">
            Connecting Indonesia's Finest Spices with the World
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            We envision a world where Indonesian spices are celebrated globally for their authenticity, 
            quality, and the rich cultural heritage they represent.
          </p>
        </div>

        {/* Mission Section */}
        <div 
          ref={contentRef}
          className={`transition-all duration-800 ${
            contentVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#2A4031]/10 text-[#2A4031] rounded-full text-sm font-semibold">
                Our Mission
              </span>
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-[#2A4031] mb-4">
              What Drives Us Forward
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {missions.map((mission, index) => (
              <div
                key={mission.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  contentVisible 
                    ? `animate-fade-in-up animate-delay-${(index + 3) * 100}` 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-[#D97706]/10 rounded-full text-[#D97706]">
                    {mission.icon}
                  </div>
                  <p className="text-[#2A4031] font-medium leading-relaxed">
                    {mission.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
