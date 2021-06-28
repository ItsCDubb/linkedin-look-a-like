import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://centralairequipment.com/wp-content/uploads/2021/05/LinkedIN-600x180.jpg"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name (required if registering" />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </form>
      <p>
        Not a member? <span>Register Now</span>
      </p>
    </div>
  );
}

export default Login;
