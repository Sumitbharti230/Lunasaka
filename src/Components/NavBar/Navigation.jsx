import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import Momologo from "../../assets/images/momologo.png"; // keeping original logo
import { FiShoppingCart } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegUserCircle } from "react-icons/fa";
import { CartContext } from "../Context/CartProvider";
import { useContext } from "react";

function Navigation() {
  const { user, isAuthenticated, logout } = useAuth0();
  const { state } = useContext(CartContext);

  const totalItems = state.CartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="border-2 flex justify-around items-center px-5 gap-x-3 h-16">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3 font-bold">
        <img src={Momologo} alt="Lunasaka Logo" className="h-7" />
        <NavLink to='/' className="text-green-500">Lunasaka</NavLink>
      </div>

      {/* Menu Links */}
      <div className="items-center space-x-6 p- text-center text-slate-500 flex">
        <NavLink to='/about' className="relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">About Us</NavLink>
        <NavLink to='/services' className="relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Our Services</NavLink>
        <NavLink to='/menu' className="relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Menu</NavLink>
        <NavLink to='/allergyadvice' className="relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Allergy Advice</NavLink>

        {isAuthenticated ? (
          <NavLink onClick={() => logout()}>Log Out</NavLink>
        ) : (
          <div>
            <NavLink to="/login">Login</NavLink>&nbsp;&nbsp;
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
        )}
      </div>

      {/* Cart and Socials */}
      <div className="flex items-center gap-x-3">
        <NavLink to="/Cartpage" className="relative text-2xl text-slate-500">
          <FiShoppingCart className="w-10 h-14" />
          <span className="absolute bottom-8 text-red-600 left-10 font-bold rounded-full">{totalItems}</span>
        </NavLink>

        <NavLink to="https://www.facebook.com/" target="_blank" className="text-2xl text-slate-500">
          <FaFacebook />
        </NavLink>

        <NavLink to="https://www.tiktok.com/" target="_blank" className="text-2xl text-slate-500">
          <AiFillTikTok />
        </NavLink>

        <NavLink to="https://www.instagram.com/" target="_blank" className="text-2xl text-slate-500">
          <FaInstagramSquare />
        </NavLink>

        <NavLink to='/contact' className="bg-orange-400 rounded-3xl text-white px-4 py-2 hover:bg-orange-700">Contact Us</NavLink>

        {isAuthenticated ? (
          <NavLink to="/profile" className="rounded-full">
            <img className="rounded-full h-10" src={user.picture} alt={user.name} />
          </NavLink>
        ) : (
          <FaRegUserCircle size={25} />
        )}
      </div>
    </div>
  );
}

export default Navigation;
