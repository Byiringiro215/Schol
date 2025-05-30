import React from 'react'
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import { useSearch } from '@/DashboardComponents/DashboardProviders/UseSearchProvider';

const Search = () => {
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
  } = useSearch();

  return (
    <div>
        <div className="relative ">
              <input
                className="block w-[20rem] rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleSearch(e.target.value);
                }}
                id="search"
                type="text"
                name="search"
                placeholder="Search..."
              />
              <MagnifyingGlassIcon 
                onClick={() => handleSearch(searchTerm)}
                className="cursor-pointer absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" 
              />
            </div>
    </div>
  )
}

export default Search
