import { useState, useEffect } from "react"
import Qr from "../../assets/images/qr.png"
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Footer from "../Footer/Footer";
import { CartContext } from "../Context/CartProvider";



function Menu() {

  let data = useContext(CartContext);
    console.log(data)

  const [recipes, setRecipes] = useState([]);

  const getData = async () => {
    let response = await fetch('https://dummyjson.com/recipes');
    response = await response.json();
    console.log(response.recipes);
    setRecipes(response.recipes);
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="flex  flex-col items-center text-center font-bold ">
        <h1 className="text-3xl mb-5 text-green-800 font-lg italic ">Our Menu</h1>
        <p><span className="text-orange-600">Our menu is more than just momos,</span><br />
          with a variety of dishes to cater to all tastes and preferences.</p>
      </div>

      <div className="flex flex-col items-center mt-12 ml-20 mr-20 h-96 bg-slate-100">
        <h1 className="text-2xl text-green-900 font-bold">Scan the QR code</h1>

        <p className="text-slate-600">You can also check the allergy advices using your phone as well</p>
        <img src={Qr} alt="" className="w-40 mt-10" />
      </div>






      <div className=" flex items-center justify-center text-center ">

        {recipes.length > 0 ? (
          <div className="flex flex-wrap p-5 gap-20 justify-center items-center text-center">
            {recipes.map((items) => {
              return (
                <div className=" rounded-3xl shadow-2xl " key={items.id}>
                 

                  <NavLink to={`/productdescription/${items.id}`}>
                  <img src={items.image} alt="menu" className="w-64 p-5 rounded-3xl" />
                  <p className="font-bold"> {items.name}</p>
                  <p className="text-red-600 font-semibold">Rs {items.caloriesPerServing}</p>
                  </NavLink>
                </div>
              )
            })}
          </div>
        ) :


          recipes.length > 0 ? (
            <div className="  flex flex-wrap p-5 gap-20 justify-center items-center ">
              {recipes.map((items) => {
                return (


                  <div key={items.id} className=" shadow-2xl shadow-slate-500 rounded-3xl   ">
                    <img src={items.image} alt="menu" className="w-64 p-5 rounded-3xl" />
                    <p> Name:{items.name}</p>
                    <p className="text-orange-600">Price:Rs {items.caloriesPerServing}</p>

                  </div>
                )
              })}
            </div>
          ) : (

            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

          )}


      </div>


      <div className="mt-10">
      <hr />

    <Footer/>
    </div>

    </>
  )
}

export default Menu
