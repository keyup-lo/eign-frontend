"use client"

import { useState } from 'react'
import '../../styles/contact/form-section.css';


export default function ContactFormSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="holder max-w-7xl mx-20">
        <div className="contact_section flex jusitfy-center items-center gap-20">
          
          {/* Left Side - Contact Information */}
          <div className="contact_info space-y-8 w-[40%]">
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
          <div className="contact_form w-[60%]">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
            
            <div className="space-y-6">
              {/* Name and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value=""
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full name"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value=""
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
                    value=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Company"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value=""
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone (Optional)"
                  />
                </div>
              </div>

              {/* What are you interested in? */}
              <div>
              <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message here..."
                  rows={4}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y transition-colors`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
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