import { Filter } from 'lucide-react';
import { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

function FilterButton() {
    const [isOpen, setIsOpen] = useState(false);
    const { 
        filterCity, setFilterCity, 
        filterCompany, setFilterCompany, 
        cities, companies 
    } = useContext(UserContext);
    
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const hasActiveFilters = filterCity !== '' || filterCompany !== '';

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 bg-white border outline-none rounded-full hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-indigo-500/50 flex items-center justify-center ${hasActiveFilters ? 'border-indigo-500 text-indigo-600' : 'border-gray-200 text-gray-500'}`}
            >
                <Filter size={18} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-700">Filters</h3>
                        {hasActiveFilters && (
                            <button 
                                onClick={() => { setFilterCity(''); setFilterCompany(''); }}
                                className="text-xs text-red-500 hover:text-red-700"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <select 
                                value={filterCity}
                                onChange={(e) => setFilterCity(e.target.value)}
                                className="w-full border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 outline-none"
                            >
                                <option value="">All Cities</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                            <select 
                                value={filterCompany}
                                onChange={(e) => setFilterCompany(e.target.value)}
                                className="w-full border border-gray-200 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 outline-none"
                            >
                                <option value="">All Companies</option>
                                {companies.map(company => (
                                    <option key={company} value={company}>{company}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterButton;