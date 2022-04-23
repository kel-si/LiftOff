import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminUsersItem from './AdminUsersItem';

export default function AdminUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/admin/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userList = users.map((user) => {
    return (
      <div className="post--item">
        <AdminUsersItem
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          level={user.level}
          time={user.created_at}
          usersState={users}
          setUsers={setUsers} 
        />
      </div>
    );
  });
  return (
      <div className="user-container">
        {userList}
      </div>
    
  )
}
