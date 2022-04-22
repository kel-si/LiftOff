import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminUsersItem from './AdminUsersItem';

export default function AdminUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/admin/users")
      .then((res) => {
        console.log("user request", res.data.users)
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
          name={user.name}
          email={user.email}
          level={user.level}
          time={user.created_at}
        />
      </div>
    );
  });
  return (
    <div className='Feed'>
      <div className="container">
        {userList}
      </div>
    </div>
    
  )
}
