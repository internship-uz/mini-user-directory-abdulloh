import { Search } from 'lucide-react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import FilterButton from './filter';

function Navbar() {
    const { search, setSearch } = useContext(UserContext);

    return (
        <nav className='w-full bg-white shadow-sm px-6 py-4 sticky top-0 z-10'>
            <div className='max-w-[1300px] mx-auto flex items-center justify-between'>
              <h1 className='text-2xl font-bold text-indigo-600'>Mini user directory</h1>
              <div className='flex items-center gap-4'>
                {/* Search input */}
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <Search size={18} className='text-gray-400' />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search users..." 
                    className='block w-full sm:w-64 pl-10 pr-3 py-2.5 border border-gray-200 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all bg-gray-50 focus:bg-white'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                  />
                </div>
                <FilterButton />
              </div>
            </div>
          </nav>
    );
}

export default Navbar;