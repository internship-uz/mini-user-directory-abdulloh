import { createContext, useState } from 'react';
import { useUsers } from '../hooks/useUsers';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterCompany, setFilterCompany] = useState('');

  const filterUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                          user.email.toLowerCase().includes(search.toLowerCase());
    const matchesCity = filterCity ? user.address?.city === filterCity : true;
    const matchesCompany = filterCompany ? user.company?.name === filterCompany : true;
    
    return matchesSearch && matchesCity && matchesCompany;
  });

  const cities = [...new Set(users.map(u => u.address?.city).filter(Boolean))];
  const companies = [...new Set(users.map(u => u.company?.name).filter(Boolean))];

  return (
    <UserContext.Provider value={{
      users,
      search,
      setSearch,
      filterUsers,
      loading,
      error,
      filterCity,
      setFilterCity,
      filterCompany,
      setFilterCompany,
      cities,
      companies
    }}>
      {children}
    </UserContext.Provider>
  );
}
