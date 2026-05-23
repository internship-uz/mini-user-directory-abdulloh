import { createContext, useState } from 'react';
import { useUsers } from '../hooks/useUsers';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const { users } = useUsers();
  const [search, setSearch] = useState('');

  const filterUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <UserContext.Provider value={{
      users,
      search,
      setSearch,
      filterUsers
    }}>
      {children}
    </UserContext.Provider>
  );
}
