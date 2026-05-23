import { useState, useEffect } from 'react';
import { getUsers } from '../service/api';

export function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return { users, setUsers };
}
