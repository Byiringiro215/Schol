'use client'

import { useState } from 'react'
import { BellIcon, CheckCircleIcon,  } from '@heroicons/react/24/outline'
import { CircleIcon } from 'lucide-react'

const notifications = [
  {
    id: '1',
    title: 'New assignment uploaded in Physics',
    description: 'Your Physics teacher has uploaded a new assignment due next week.',
    time: '5 mins ago',
    read: false,
  },
  {
    id: '2',
    title: 'School fee deadline approaching',
    description: 'Please ensure your fees are cleared before the end of the term.',
    time: '1 hour ago',
    read: true,
  },
  {
    id: '3',
    title: 'Library book return notice',
    description: 'Return borrowed books to avoid late fees.',
    time: '3 days ago',
    read: false,
  },
  {
    id: '4',
    title: 'New message from your class teacher',
    description: 'Check your inbox for the latest message from Mr. Mugisha.',
    time: '6 days ago',
    read: true,
  },
]

export default function NotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all')

  const filtered = notifications.filter(n => {
    if (filter === 'unread') return !n.read
    if (filter === 'read') return n.read
    return true
  })

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
            <p className="text-gray-500 text-sm">Stay up to date with important updates</p>
          </div>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value as any)}
            className="bg-white border border-gray-300 rounded-md p-2 text-sm shadow-sm focus:outline-none"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </header>

        <div className="bg-white rounded-md shadow-md divide-y">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-gray-400">No notifications found.</div>
          ) : (
            filtered.map(notification => (
              <div
                key={notification.id}
                className="flex items-start gap-4 p-6 hover:bg-gray-50 transition-all"
              >
                {notification.read ? (
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                ) : (
                  <CircleIcon className="w-5 h-5 text-blue-500 mt-1" />
                )}

                <div>
                  <h2 className="text-sm font-semibold text-gray-800">
                    {notification.title}
                  </h2>
                  <p className="text-sm text-gray-600">{notification.description}</p>
                  <span className="text-xs text-gray-400">{notification.time}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
