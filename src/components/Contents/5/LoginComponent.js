import { useState } from "react";
import RegisterFrom from "./RegisterFrom";
import LoginFrom from "./LoginFrom";

const LoginComponent = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleChageFrom = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className="login-background">
      <div className="login-form">
        <div className="sign-up-header">Sign Up</div>
        {isRegister ? <LoginFrom /> : <RegisterFrom />}
        <hr />
        <div className="login-account">
          {isRegister ? "Create an account?" : "Already have an account?"}{" "}
          <span onClick={handleChageFrom}>
            {isRegister ? "Register" : "Login"}
          </span>
        </div>
        <div className="cuations">
          <div>
            Use email : <strong> karn.yong@melivecode.com</strong> / Password :
            <strong> melivecode</strong>
          </div>
          <div>
            or <strong>Register</strong> for use <strong>Login</strong>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
