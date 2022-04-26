import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/Admin.scss";
import { AiOutlineCheckSquare, AiOutlineUser } from 'react-icons/ai'

export default function AdminLanding() {
  return (
    <div className='page-container'>
      <div className='admin-landing'>
        <div className="admin-menu-container">
        <AiOutlineCheckSquare className="admin-icons"/>
        <Link to="/admin-approvals">Approvals</Link>
        </div>

        <div className="admin-menu-container">
        <AiOutlineUser className="admin-icons"/>
        <Link to="/admin-users">Users</Link>
        </div>
      </div>
    </div>
  )
}


