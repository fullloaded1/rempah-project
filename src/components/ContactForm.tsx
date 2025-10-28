'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>(0.2)
  const [formRef, formVisible] = useScrollAnimation<HTMLDivElement>(0.1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2A4031] mb-4">
            Get Your Exclusive Catalog
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            Ready to explore our premium spice collection? Contact us today to receive 
            your personalized catalog with detailed product specifications and pricing.
          </p>
        </div>

        <div 
          ref={formRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Contact Form */}
          <div className={`bg-[#F8F5F2] rounded-3xl p-8 lg:p-10 transition-all duration-700 ${
            formVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="font-heading text-2xl font-bold text-[#2A4031] mb-6">
              Send Us Your Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#2A4031] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-[#2A4031] mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#2A4031] mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="Enter your business email"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#2A4031] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all duration-200 bg-white resize-none"
                  placeholder="Tell us about your specific requirements, quantities, or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D97706] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#B45309] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Inquiry...
                  </span>
                ) : (
                  'Send Inquiry'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 ${
            formVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0 translate-x-8'
          }`}>
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#2A4031] mb-6">
                Get in Touch
              </h3>
              <p className="text-[#4B5563] leading-relaxed mb-8">
                Our team is ready to assist you with any questions about our products, 
                pricing, or shipping arrangements. We typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D97706] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-[#2A4031] mb-1">Email</h4>
                  <p className="text-[#4B5563]">export@nusantaraspice.com</p>
                  <p className="text-sm text-[#4B5563]">For business inquiries</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D97706] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-[#2A4031] mb-1">Phone</h4>
                  <p className="text-[#4B5563]">+62 21 1234 5678</p>
                  <p className="text-sm text-[#4B5563]">Mon-Fri, 9AM-6PM (GMT+7)</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D97706] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-[#2A4031] mb-1">Office</h4>
                  <p className="text-[#4B5563]">Jl. Raya Spice No. 123</p>
                  <p className="text-[#4B5563]">Jakarta 12345, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[#F8F5F2] rounded-2xl p-6">
              <h4 className="font-heading font-semibold text-[#2A4031] mb-3">Our Certifications</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-[#4B5563]">
                <div>• ISO 22000:2018</div>
                <div>• HACCP Certified</div>
                <div>• Fair Trade Certified</div>
                <div>• Organic Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
