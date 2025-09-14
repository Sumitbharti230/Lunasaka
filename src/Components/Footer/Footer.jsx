import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Momologo from "../../assets/images/momologo.png"; // keeping same logo
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="bg-slate-50">
                <div className='flex gap-40 mt-5'>

                    {/* Logo and Description */}
                    <div className='ml-52'>
                        <div className="flex gap-2">
                            <img src={Momologo} alt="Lunasaka Logo" className="h-7" />
                            <h1 className='text-green-800 text-xl font-bold'>Lunasaka</h1>
                        </div>
                        <p className='text-slate-600'>
                            Lunasaka Restaurant brings authentic flavors to your table. <br />
                            Fresh ingredients, crafted recipes, and a warm atmosphere <br />
                            make every dining experience special. Join us for memorable meals <br />
                            with friends, family, or solo.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className='flex justify-center items-center gap-14 '>
                        <div>
                            <h1 className='text-green-800 font-bold'>Lunasaka</h1>
                            <div className='text-slate-600'>
                                <NavLink to="/about"><p>About Us</p></NavLink>
                                <NavLink to="/menu"><p>Our Menu</p></NavLink>
                                <NavLink to="/services"><p>Our Services</p></NavLink>
                                <NavLink to="/contact"><p>Contact Us</p></NavLink>
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div className="mb-5">
                            <h1 className='text-green-800 font-bold'>Legals</h1>
                            <div className='text-slate-600'>
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Support</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mb-3">
                            <h1 className='text-green-800 font-bold'>Follow Us</h1>
                            <div className="flex gap-6 mt-3 text-2xl text-slate-500">
                                <NavLink to="https://www.facebook.com/" target="_blank">
                                    <FaFacebook />
                                </NavLink>
                                <NavLink to="https://www.linkedin.com/" target="_blank">
                                    <FaLinkedin />
                                </NavLink>
                                <NavLink to="https://www.twitter.com/" target="_blank">
                                    <AiFillTwitterCircle />
                                </NavLink>
                            </div>
                            <div className="flex gap-6 mt-5 text-2xl text-slate-500">
                                <NavLink to="https://www.youtube.com/" target="_blank">
                                    <FaYoutube />
                                </NavLink>
                                <NavLink to="https://www.instagram.com/" target="_blank">
                                    <FaInstagramSquare />
                                </NavLink>
                                <NavLink to="https://www.tiktok.com/" target="_blank">
                                    <AiFillTikTok />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex items-center text-center justify-center mt-16">
                    <p>Copyright ©️2025 Lunasaka Restaurant. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
