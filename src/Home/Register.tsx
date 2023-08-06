import { useState } from "react";

export default function Register() {
  const MyComponent: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword: any) => !prevShowPassword);
    };

    return (
      <div>
        <h1>Component 1</h1>
        <input
          type={showPassword ? "text" : "password"}
          id="myInput"
          // Any additional input attributes can be added here
        />
        <button onClick={togglePasswordVisibility}>Toggle Password</button>

        <h1>Component 2</h1>
        <input
          type={showPassword ? "text" : "password"}
          id="myInput1"
          // Any additional input attributes can be added here
        />
        <button onClick={togglePasswordVisibility}>Toggle Password</button>
      </div>
    );
  };
  return (
    <div className="body-1">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="username,email or phone" required />
            <i className="far fa-user-circle"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="enter your password"
              id="myInput"
              required
            />
            <i
              className="far fa-eye"
              id="togglePassword" /*</div>{...MyComponent}*/
            ></i>

            <div className="remember-forget">
              <label htmlFor="">
                <input type="checkbox" className="box" />
              </label>
              <p>remember me</p>

              <a href="" className="link">
                forget password
              </a>
            </div>
            <button type="submit" className="btn">
              login
            </button>
            <div className="register-link">
              <p>
                do not have an account? <a className="link-1">register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
