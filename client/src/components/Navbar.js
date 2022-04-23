import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components.scss";
import "../styles/Navbar.scss";
import { levelName, levelAvatar } from "./helpers/navHelpers";

export default function Navbar(props) {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem('liftoffUser');
    if (!currentUser) {
      // no user 
    } else {
      const liftoffUser = JSON.parse(currentUser);
      setUser(liftoffUser);
      setLogin(1);
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.clear();
    setLogin(0);
    setUser({});
  };

  return (
    <nav>
      <h1 className="logo">
        <Link to="/">
          LiftOff
          <span role="img" aria-label="rocket ship emoji">
            🚀
          </span>
        </Link>
      </h1>
      <ul>
        <button>
          <li>
            <Link to="/my-posts">My Posts Button</Link>
          </li>
        </button>
        <button>
          <li>
            <Link to="/guidelines">Guidelines</Link>
          </li>
        </button>
        <button>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </button>
        {!login ? (
          <button onClick={props.logout}>
            <li>
              <Link to="/">Log In Button</Link>
            </li>
          </button>
        ) : (
           <button onClick={logOut}>
           <li>
             <Link to="/">Log Out Button</Link>
           </li>
         </button>
        )  }
      </ul>
    
      <div className="avatar-container">
        <img
          className="avatar-image"
          src={levelAvatar(user.level)}
          alt="avatar"
        />
        <div><h3>{ user.name }</h3></div>
        <div> Level: { levelName(user.level) }</div>
      </div>
    </nav>
  );
}
