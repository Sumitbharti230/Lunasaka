import Button from "../Button/Button"
import bgOne from '../../assets/images/bgOne.jpg'
import chefimg from '../../assets/images/chefimg.png'
import circle from '../../assets/images/circle.png'
import momo from '../../assets/images/momo.png'
import man from '../../assets/images/man.png'
import like from '../../assets/images/hlike.png'
import celebrate from '../../assets/images/hcelebrate.png'
import chefCap from '../../assets/images/hchefcap.png'
import girl from '../../assets/images/girl.png'
import Footer from "../Footer/Footer"
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function Home() {

  const [recipes, setRecipes] = useState([]);
  const [filterProduct, setfilterProduct] = useState([]);

  // Fetch recipes
  const getData = async () => {
    let response = await fetch('https://dummyjson.com/recipes');
    response = await response.json();
    setRecipes(response.recipes);
  };

  const filterItems = (country) => {
    const newItems = recipes.filter((item) => item.cuisine === country);
    setfilterProduct(newItems);
  };

  const filterItemsall = (country) => {
    if (country === "All") {
      setfilterProduct(recipes);
    } else {
      const newItems = recipes.filter((item) => item.cuisine === country);
      setfilterProduct(newItems);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="flex mt-5 h-96 ">
        <div className="w-[50%] ml-[20%] mt-20">
          <p className="text-1xl text-slate-500">WELCOME TO</p>
          <h1 className="text-3xl flex items-center font-bold">
            The
            <span
              style={{ backgroundImage: `url(${bgOne})` }}
              className="h-16 w-36 bg-contain text-center text-3xl
              bg-no-repeat flex items-center justify-center text-white ml-2"
            >
              #One
            </span>
          </h1>
          <h1 className="text-3xl">Lunasaka <span className="text-orange-600">Restaurant</span></h1>
          <p>
            Experience <span className="text-orange-600">authentic taste</span> & handcrafted dishes made with love.
          </p>
          <br />
          <NavLink to="/menu">
            <Button title="Explore Food Menu" />
          </NavLink>
        </div>

        <div className="flex items-center p-50 overflow-hidden h-[110%]">
          <img src={circle} alt="circle_img" className="w-[31%] ml-[70%] mb-14" />
        </div>

        <img src={momo} alt="momo" className="absolute w-80 left-[75%] mt-12" />
      </div>

      {/* Why Love Us */}
      <div className="flex items-center gap-20">
        <div className="w-[30%] p-5 ml-[20%]">
          <img src={man} alt="chef" className="w-auto h-96" />
        </div>
        <div className="w-[30%]">
          <h1 className="text-2xl font-bold">
            Why Guests <span className="text-orange-500">Love Lunasaka</span>
          </h1>
          <br /><br />
          <p>
            At Lunasaka, we blend tradition and modern flavors to create a dining experience like no other. 
            Fresh ingredients, masterful chefs, and a cozy atmosphere make every meal memorable.
          </p>
          <br />
          <NavLink to="/about">
            <Button title="Discover Our Story" />
          </NavLink>
        </div>
      </div>

      {/* Popular Recipes */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Our <span className="text-orange-600">Signature</span> Dishes
        </h1>
        <p className="text-slate-600">
          Explore handcrafted recipes curated with love and the freshest ingredients.
        </p>

        {/* Filters */}
        <div className="flex justify-center items-center gap-5 mt-10">
          <button onClick={() => filterItemsall("All")} className="border-2 border-slate-400 bg-slate-300 rounded-2xl w-16 hover:bg-orange-600">
            All
          </button>
          <button onClick={() => filterItems("Italian")} className="border-2 border-slate-400 bg-slate-300 rounded-2xl w-16 hover:bg-orange-600">
            Italian
          </button>
          <button onClick={() => filterItems("Pakistani")} className="border-2 border-slate-400 bg-slate-300 rounded-2xl w-24 hover:bg-orange-600">
            Pakistani
          </button>
          <button onClick={() => filterItems("Russian")} className="border-2 border-slate-400 bg-slate-300 rounded-2xl w-16 hover:bg-orange-600">
            Russian
          </button>
        </div>

        {/* Recipes */}
        <div className="flex items-center justify-center">
          {filterProduct.length > 0 ? (
            <div className="flex flex-wrap p-5 gap-20 justify-center items-center text-center">
              {filterProduct.map((items) => (
                <div key={items.id} className="rounded-3xl shadow-2xl">
                  <img src={items.image} alt="menu" className="w-64 p-5 rounded-3xl" />
                  <p>{items.name}</p>
                  <p className="text-orange-600">Price: Rs {items.caloriesPerServing}</p>
                </div>
              ))}
            </div>
          ) : recipes.length > 0 ? (
            <div className="flex flex-wrap p-5 gap-20 justify-center items-center">
              {recipes.map((items) => (
                <div key={items.id} className="shadow-2xl shadow-slate-500 rounded-3xl">
                  <img src={items.image} alt="menu" className="w-64 p-5 rounded-3xl" />
                  <p>{items.name}</p>
                  <p className="text-orange-600">Price: Rs {items.caloriesPerServing}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center items-center mt-8">
          <NavLink to='/menu'>
            <Button title="Explore Full Menu" />
          </NavLink>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-7 text-center">
        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">We Offer</span> Exceptional Services
        </h1>
      </div>

      <div className="flex justify-center items-center gap-24 mt-14">
        <div className="flex flex-col items-center p-5">
          <img src={like} alt="qualityFood" className="w-28" />
          <h1 className="font-bold text-2xl mt-3">Quality Dining</h1>
          <p className="mt-4 text-slate-800">Finest dishes made with premium <br />ingredients and care.</p>
        </div>
        <div className="flex flex-col items-center p-5">
          <img src={celebrate} alt="party_img" className="w-28" />
          <h1 className="font-bold text-2xl mt-3">Celebrations</h1>
          <p className="mt-4 text-slate-800">Perfect place for family gatherings <br />and private parties.</p>
        </div>
        <div className="flex flex-col items-center p-5">
          <img src={chefCap} alt="chefCap_img" className="w-28" />
          <h1 className="font-bold text-2xl mt-3">Catering</h1>
          <p className="mt-4 text-slate-800">Delicious food for weddings, events, <br />and special occasions.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex mt-10 gap-10 bg-slate-100">
        <div className="w-96 ml-64 text-left mt-16">
          <h1 className="text-3xl font-bold">200+ <span className="text-orange-500">Happy Guests</span></h1>
          <p className="text-green-900 mt-5">What our customers say about us</p>
          <p className="text-lg italic text-slate-600">
            “The best dining experience! Lunasaka offers amazing flavors and a warm atmosphere. Highly recommended.”
          </p>
          <h1 className="text-2xl font-bold mt-2 mb-6">Alexandra Smith</h1>
          <div className="flex gap-3">
            <CiCircleChevLeft size={30} />
            <CiCircleChevRight size={30} />
          </div>
        </div>
        <div className="ml-44 mt-5 mb-10">
          <img src={girl} alt="guest" className="w-80 h-96" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col justify-center items-center text-center p-3">
        <div>
          <h1 className="text-2xl font-bold"><span className="text-orange-500">Get</span> In Touch</h1>
          <p className="text-green-800 font-bold mt-2">We’d love to hear from you</p>
        </div>
        <div className="flex h-[550px] p-5 gap-5">
          <div className="bg-teal-800 text-white p-6 rounded-xl w-72 h-[560px] text-left max-w-md mx-auto space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaMapMarkerAlt /> Our Address
              </h3>
              <p className="italic text-sm mt-4">New Baneshwor, Kathmandu, Bagmati,<br /> Nepal</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaPhone /> Our Contacts
              </h3>
              <div className="text-sm flex mt-4">
                <p><strong>Mobile:</strong> <br /> 980 5689789 <br /> 9841 275897</p>
                <p><strong className="ml-10"> Landline:</strong> <br />01-4783972</p>
              </div>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaClock /> Our Service Time
              </h3>
              <div className="text-sm flex mt-4">
                <p><strong>MON - FRI:</strong> <br />10 am - 8 pm</p>
                <p><strong className="ml-10">SAT - SUN:</strong><br /><span className="ml-10">Closed</span></p>
              </div>
            </div>
            <div className="text-left">
              <p className="italic text-sm mt-16">Get in touch on social networks</p>
              <div className="flex gap-4 mt-4 text-xl">
                <FaFacebook className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
                <FaTiktok className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>

          {/* Contact Form Fields */}
          <div>
            <form className="ml-5 mt-5 text-left">
              <div className="flex gap-10">
                <div>
                  <label className="block mb-1" htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" className="p-2 border rounded w-35" required />
                </div>
                <div>
                  <label className="block mb-1" htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" className="p-2 border rounded w-35" required />
                </div>
              </div>
              <div>
                <label className="block mb-1" htmlFor="purpose">What Can We Do For You?</label>
                <input type="text" id="purpose" name="purpose" placeholder="Enter your purpose" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block mb-1" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1" htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" className="w-full h-24 p-2 border rounded" rows="4" required></textarea>
              </div>
              <button className="bg-orange-500 mt-5 hover:bg-green-800 p-4 flex items-center gap-x-2 text-white rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default Home;
