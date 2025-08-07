'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How can I enroll in a course?',
    answer: 'Go to the Courses tab, choose your preferred course, and click the "Enroll" button. If payment is required, you will be redirected to the payment page.',
  },
  {
    question: 'How do I contact my instructor?',
    answer: 'Go to the course details page and find the instructor section. You can send a message directly from there.',
  },
  {
    question: 'What should I do if I forget my password?',
    answer: 'Click "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: 'Where can I see my progress?',
    answer: 'Navigate to your Dashboard. You’ll find each course card showing your progress percentage.',
  },
]

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
   // Simulate form submission
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pb-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How can we help you?</h1>
          <p className="text-gray-600 mb-6">
            Find answers to frequently asked questions or get in touch with support.
          </p>
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left text-gray-800 font-medium"
              >
                {faq.question}
                <ChevronDown className={`ml-2 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Still need help? Contact us</h2>
          {submitted ? (
            <div className="bg-green-100 border-l-4 border-green-600 text-green-700 p-4 rounded-lg">
              ✅ Your message has been sent! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
