import React from 'react';
import { Link } from "react-router-dom";

export default function AdminLanding() {
  return (
    <div className='page-container'>
      <ul>
      <Link to="/admin-approvals"><li>Approvals</li></Link>
      <Link to="/admin-users"><li>Users</li></Link>
      </ul>
    </div>
  )
}


