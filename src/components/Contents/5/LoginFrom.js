import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginFrom = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: email,
      password: pass,
      expiresIn: 600000,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status === 'ok'){
          alert('Login สำเร็จ')
          localStorage.setItem('token',result.accessToken)
          navigate('/user')
        }else{
          alert('Login ล้มเหลว กรุณาตรวจสอบ Email หรือ Password.')
        }
        console.log(result)
      })
      .catch((error) => console.log("error", error));

    console.log(email);
    console.log(pass);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="free-trial">
        Login
      </button>
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
    </form>
  );
};

export default LoginFrom;
