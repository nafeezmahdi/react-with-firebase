import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(evnt) {
    evnt.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSocialLogin() {
    const user = await signInWithGoogle();
    // console.log(user)
    navigate("/home");
  }

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Login</h1>
      <form className="flex flex-col justify-center items-center">
        <div className="my-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="mx-2 my-2 p-1 border bg-gray-100 rounded-sm"
          />
        </div>
        <div className="my-1">
          <label htmlFor="password">Email Address</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border bg-gray-100 rounded-sm"
          />
        </div>
        <div>
          <button
            className="bg-black text-white p-1 rounded-md mx-2"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-blue-500 text-white p-1 rounded-md"
            onClick={handleSocialLogin}
          >
            Login With Google
          </button>
        </div>
      </form>
      <p className="my-2">
        No Account?
        <NavLink to="/register" className="underline">
          Register
        </NavLink>
      </p>
      <p className="my-2">
        Forgot Password?
        <NavLink to="/reset" className="underline">
          Reset Your Password
        </NavLink>
      </p>
    </div>
  );
}
