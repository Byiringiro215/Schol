'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps
} from 'recharts'

interface ChartProps {
  data: Array<{
    year: string
    approved: number
    submitted: number
  }>
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-1 text-[10px] border border-gray-200 rounded-lg shadow-lg">
        <p className=" font-semibold text-gray-700">{`Year: ${label}`}</p>
        <div className="flex flex-col gap-1 mt-1">
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className=" text-gray-600">
                {`${entry.name}: ${entry.value}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="approved"
          stroke="#D736FF"
          strokeWidth={3}
          dot={false}
          name="Approved"
        />
        <Line
          type="monotone"
          dataKey="submitted"
          stroke="#3E29D1"
          strokeWidth={3}
          dot={false}
          name="Submitted"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart 