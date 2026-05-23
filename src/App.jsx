import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import { getUsers } from './service/api';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUsers()
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
        <Navbar search={search} setSearch={setSearch}/>
        {/* Main content */}
        <Card filterUsers={filterUsers} search={search} />
    </div>
  );
}

export default App;