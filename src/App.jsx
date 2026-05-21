import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);
  
  //Search function
  const filterUsers = users.filter((user) =>
    user.name
    .toLowerCase()
    .startsWith(search.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center w-full pb-10'>
      {/* Navbar */}
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
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className='w-full max-w-[1300px] mt-8 px-6'>
        {filterUsers.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">No users found matching start with "{search}"</div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filterUsers.map(user => (
              <div key={user.id} className='bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col gap-3'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl'>
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className='text-lg font-bold text-gray-800 leading-tight'>{user.name}</h2>
                  </div>
                </div>
                <div className='text-sm text-gray-600 mt-2 flex flex-col gap-2'>
                  <p><span className='font-semibold text-gray-700'>Email:</span> {user.email}</p>
                  <p><span className='font-semibold text-gray-700'>Phone:</span> {user.phone.split(' ')[0]}</p>
                  <p><span className='font-semibold text-gray-700'>City:</span> {user.address?.city}</p>
                </div>
              </div>  
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;