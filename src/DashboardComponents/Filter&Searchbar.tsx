import React from 'react'
import Search from '@/app/dashboard/students/Search' 
import { useSearch } from './DashboardProviders/UseSearchProvider';

const Filter_Searchbar = () => {
  const {
    selectedGender,
    setSelectedGender,
  } = useSearch();

  return (
    <div>
       <div className='flex gap-3'>
        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
          className='w-7rem'
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <Search/>
      </div>
    </div>
  )
}

export default Filter_Searchbar
