import React, { useState } from "react";
import GoogleLogin from "../../../assets/images/GoogleSignin.png";

const RegisterFrom = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    if (pass === confirm && pass !== "") {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        fname: firstName,
        lname: lastName,
        username: email,
        password: pass,
        email: email,
        avatar: "https://www.melivecode.com/users/cat.png",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://www.melivecode.com/api/users/create", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === "ok") {
            alert("ลงทะเบียนสำเร็จ");
            window.location.reload();
          } else {
            alert(result.message);
          }
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    } else {
      alert("กรุรากรอก Password ให้ตรงกัน");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="free-trial">
        Start your free trial
      </button>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        placeholder="Your First Name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Your First Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Your primary email"
      />
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        type="password"
        placeholder="Re-type Password"
      />
      <div style={{ fontWeight: "500" }}>OR</div>
      <div className="google-login">
        <img src={GoogleLogin} alt="google" />
      </div>
    </form>
  );
};

export default RegisterFrom;
