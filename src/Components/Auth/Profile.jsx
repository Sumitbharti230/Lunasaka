import { useAuth0 } from "@auth0/auth0-react";
import { GoMoon } from "react-icons/go";
import { useState } from "react";

function Profile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect,logout } = useAuth0();

  const [darkMode, setDarkMode] = useState(false);

  console.log(user, user);
  console.log("isAuthenticated", isAuthenticated);
  console.log("isLoading", isLoading);

  return (
    <div
      className={`border-2 flex justify-center h-[600px] transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-600"
        }`}
    >
      {isAuthenticated ? (
        <div
          className={`border-2 rounded-xl h-96 shadow-2xl p-2 font-bold mt-16 transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <div className="flex">
            <img
              src={user.picture}
              alt="profile_picture"
              className="shadow-md shadow-black ml-20 rounded-full justify-center items-center border-2"
            />
            <GoMoon
              size="30"
              className="ml-16 mb-10 cursor-pointer"
              color={darkMode ? "yellow" : "black"} // Toggle color
              onClick={() => setDarkMode(!darkMode)} // Toggle dark mode
            />
          </div>

          <div className="mt-5 flex flex-col gap-5 underline">
            <h2 className="underline">Name: {user.name}</h2>
            <p>Nickname: {user.nickname}</p>
            <p>Email: {user.email}</p>
            <button className="bg-teal-800 rounded-sm text-white h-10 w-36 mt-6"  onClick={() => {
              logout();
            }}>
              
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...........</div>
      )}
    </div>
  );
}

export default Profile;
