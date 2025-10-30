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
                  <a href="mailto:nusaterraspices@gmail.com" className="text-[#4B5563] hover:text-[#D97706] transition-colors">nusaterraspices@gmail.com</a>
                  <p className="text-sm text-[#4B5563]">For business inquiries</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D97706] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-[#2A4031] mb-1">WhatsApp</h4>
                  <a href="https://wa.me/6285144920078" target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#D97706] transition-colors">+62 851-4492-0078</a>
                  <p className="text-sm text-[#4B5563]">Quick response via WhatsApp</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D97706] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-[#2A4031] mb-1">Social Media</h4>
                  <div className="space-y-1">
                    <a href="https://instagram.com/nusaterra_spices" target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#D97706] transition-colors block">Instagram: @nusaterra_spices</a>
                    <a href="https://linkedin.com/company/nusa-terra-spices" target="_blank" rel="noopener noreferrer" className="text-[#4B5563] hover:text-[#D97706] transition-colors block">LinkedIn: Nusa Terra Spices</a>
                  </div>
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
