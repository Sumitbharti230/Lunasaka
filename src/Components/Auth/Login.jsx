import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`✅ Login successful: ${data.message || "Welcome!"}`);
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        // redirect to /home after success
        navigate("/");
      } else {
        setMessage(`❌ Login failed: ${data.message || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("⚠️ Something went wrong!");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="max-w-sm mx-auto bg-white p-10 mt-14 rounded-lg shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="border-2 border-slate-500 w-full py-2 px-4 bg-orange-600 text-black font-medium rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        {/* Go to Signup page */}
        <button
          onClick={() => navigate("/signup")}
          type="button"
          className="mt-3 border-2 border-slate-500 w-full py-2 px-4 bg-green-600 text-black font-medium rounded-md hover:bg-green-700"
        >
          Signup
        </button>

        {/* Google login (Auth0) */}
        <button
          onClick={() => loginWithRedirect()}
          type="button"
          className="flex items-center gap-2 justify-center border-2 border-slate-500 mt-3 w-full py-2 px-4 text-black font-medium rounded-md hover:bg-blue-700"
        >
          <FcGoogle size="25" />
          Login with Google
        </button>

        {/* Messages */}
        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Login;
