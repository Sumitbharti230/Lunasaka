import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import { use } from "react";


function Login() {

  const { user, isAuthenticated, isLoading,loginWithRedirect } = useAuth0();
  console.log(user,user)
  console.log("isAuthenticated",isAuthenticated)
  console.log("isLoading",isLoading)


  return (
    <div>
      <form className="max-w-sm mx-auto bg-white p-10 mt-14 rounded-lg shadow-2xl ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 "
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 "
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className=" border-2 border-slate-500 w-full py-2 px-4 bg-orange-600 text-black font-medium rounded-md hover:bg-blue-700 "
        >
          Login
        </button>

        <button
        onClick={()=>{
          loginWithRedirect();
        }}
          type="submit"
          className=" flex items-center gap-2 justify-center border-2 border-slate-500 mt-3 w-full py-2 px-4  text-black font-medium rounded-md hover:bg-blue-700"
        >
          <FcGoogle size="25" />

          Login with google
        </button>
      </form>    </div>
  )
}

export default Login
