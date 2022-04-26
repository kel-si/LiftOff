import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminUsersItem from './AdminUsersItem';

export default function AdminUsers() {

  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState();

  useEffect(() => {
    axios.get("/admin/users")
      .then((res) => {
        setUsers(res.data.users);
        setUserCount(res.data.users.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userList = users.map((user) => {
    return (
      <div className="post--item" key={user.id}>
        <AdminUsersItem
          id={user.id}
          name={user.name}
          email={user.email}
          level={user.level}
          time={user.created_at}
          usersState={users}
          setUsers={setUsers} 
          handleCommentApproval={user.comment_approval}
          handleCommentRejection={user.comment_rejection}
        />
      </div>
    );
  });
  return (
      <div className="user-container">
        <span># of Registered Users: {userCount} </span>
        {userList}
      </div>
    
  )
}
