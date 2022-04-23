import React, { useState, useEffect } from "react";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";


export default function MyPosts(props) {

  const [user, setUser] = useState({});
  const [login, setLogin] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("liftoffUser");
    if (!currentUser) {
      navigate("/");
    } else {
      const liftoffUser = JSON.parse(currentUser);
      setUser(liftoffUser.user);
      setLogin(1);
    }
  }, [navigate]);


  return (
    <div>
      <Feed />
    </div>
  );
}
