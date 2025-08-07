'use client';
import React, { useState } from 'react';

interface optionProps {
  value: string;
  label: string;
}

interface filterProps {
  label?: string;
  options: optionProps[];
  onChange?: (value: string) => void;
}

const Filter = ({ label, options, onChange }: filterProps) => {
  const [selected, setSelected] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div>
      <select
        value={selected}
        onChange={handleChange}
        className='bg-white border border-gray-300 rounded-md px-4 py-1 text-sm focus:outline-none capitalize cursor-pointer'
      >
        {label && (
          <option value="" disabled hidden className='cursor-pointer'>
            {label}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
