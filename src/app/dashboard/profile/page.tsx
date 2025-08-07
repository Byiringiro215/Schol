'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProfilePage() {
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Anna Karin',
    email: 'annakarin@example.com',
    phone: '+250 789 000 123',
    level: 'Senior 3',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    // Save logic here 
    setEditing(false)
  }

  return (
    <div className="min-h-screen px-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/userpp.png" 
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-4 border-white"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">{formData.name}</h2>
            <p className="text-sm">{formData.email}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full mt-1 p-2 border rounded-md ${
                  editing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
                }`}
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full mt-1 p-2 border rounded-md ${
                  editing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
                }`}
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full mt-1 p-2 border rounded-md ${
                  editing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
                }`}
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Class Level</label>
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                readOnly={!editing}
                className={`w-full mt-1 p-2 border rounded-md ${
                  editing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
                }`}
              />
            </div>
          </div>

          {/* Button Section */}
          <div className="mt-6 flex gap-4 justify-end">
            {editing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
