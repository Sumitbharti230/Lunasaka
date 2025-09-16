import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");      // 👈 added name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),  // 👈 send name also
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`✅ Signup successful: ${data.message || "Account created!"}`);
        // Redirect to login after signup
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setMessage(`❌ Signup failed: ${data.message || "Try again."}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("⚠️ Something went wrong!");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSignup}
        className="max-w-sm mx-auto bg-white p-10 mt-14 rounded-lg shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter your name"
            required
          />
        </div>

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

        {/* Signup button */}
        <button
          type="submit"
          className="border-2 border-slate-500 w-full py-2 px-4 bg-green-600 text-black font-medium rounded-md hover:bg-green-700"
        >
          Signup
        </button>

        {/* Messages */}
        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Signup;
