import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components.scss";

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

  const checkLevel = (level) => {
    if (level === 0) {
      return "Earthling";
    } else if (level === 1) {
      return "Mini Martian";
    } else if (level === 2) {
      return "Moon Walker";
    } else if (level > 2) {
      return "Supreme Leader";
    } else {
      return "";
    }
  }

  return (
    <nav>
      <h1>
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
          src="https://i.pinimg.com/originals/f3/8f/15/f38f150e6ae908a1e908597a92eb1e99.png"
          alt="shiba in the universe"
        />
        <div>Logged In As: { user.name }</div>
        <div> Level: { checkLevel(user.level) }</div>
      </div>
    </nav>
  );
}
