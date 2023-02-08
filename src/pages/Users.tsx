import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { userType } from '../types/user';

function Users() {
  const users = useLoaderData() as userType[];

  return (
    <div>
      Users Page
      <ul style={{ paddingLeft: 20 }}>
        {users.data.map(user => {
          const { id, name } = user;
          return (
            <li key={id}>{name}</li>
          );
        })}
      </ul>
    </div>
  )
}

export default Users;
