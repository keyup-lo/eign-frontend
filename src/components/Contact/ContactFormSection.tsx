"use client"

import { useState } from 'react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    workScope: '',
    interested: [],
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-20">
        <div className="flex jusitfy-center items-center gap-20">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8 w-[40%]">
            <div>
              <p className="text-gray-600 leading-relaxed">
                For general enquiries, please fill out the form to get in touch. Alternatively, if you know your project details - head over to our project briefing form or book through over by video.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg text-gray-900">Hate contact forms?</h3>
              
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-gray-900">Email:</span>
                  <span className="text-blue-600 ml-2">hello@eign.com</span>
                </div>
                
                <div>
                  <span className="font-medium text-gray-900">Phone (optional):</span>
                  <span className="text-gray-600 ml-2">[+971 XXX XXX XXX]</span>
                </div>
                
                <div>
                  <span className="font-medium text-gray-900">Location:</span>
                  <span className="text-gray-600 ml-2">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-[60%]">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
            
            <div className="space-y-6">
              {/* Name and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full name"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.workScope}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Work Email"
                  />
                </div>
              </div>

              {/* Company and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Company"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone (Optional)"
                  />
                </div>
              </div>

              {/* What are you interested in? */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  What are you interested in?
                </label>
                
                <div className="flex items-center flex-wrap gap-5">
                  {[
                    'API Access',
                    'Dashboard',
                    'Embedding Scores',
                    'Expanding Partnerships',
                    'General Inquiry'
                  ].map((option) => (
                    <div className='px-4 pr-6 py-2 bg-gray-100 outline outline-gray-500 rounded'>
                      <label key={option} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700 text-sm font-semibold">{option}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
              
              <p className="text-xs text-gray-500 text-center"> By submitting this form I accept the Privacy Policy of this site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}