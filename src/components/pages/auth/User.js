import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

const User = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          setUser(result.user);
          setIsLoaded(false);
        } else if (result.status === "forbidden") {
          alert("หมดเวลาเชื่อมต่อ");
          navigate("/");
        }
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      {isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div className="user-wrapper">
          <div className="user-card-wrapper">
            <div className="avatar">
              <img src={user.avatar} alt="avatar" />
            </div>
            <div className="user-card-data">
              <div>
                <span>Full Name :</span> {user.fname}
              </div>
              <div>
                <span>Last Name :</span> {user.lname}
              </div>
              <div>
                <span>Username :</span> {user.username}
              </div>
              <div>
                <span>Email :</span> {user.email}
              </div>
            </div>
            <button className="button1" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
