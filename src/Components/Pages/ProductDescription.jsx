import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../Context/CartProvider";


function ProductDescription() {


const {state,dispatch} = useContext(CartContext);
console.log(state)






  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState({})

  const getSingleProduct = async () => {
    let productData = await fetch(
      `https://dummyjson.com/recipes/${id}`
    );
    productData = await productData.json();

    setSingleProduct(productData);
    console.log(productData)
  };
  useEffect(() => {
    getSingleProduct();
  }, [id]);



  return (

    
    <div className="  flex flex-col justify-center items-center p-5">
      {singleProduct ? (
        <>


          <div className=" flex gap-6 mt-5 shadow-xl mr-96  ">
            <img className="h-72 w-72 shadow-2xl mt-5 rounded-xl" src={singleProduct.image} alt="" />

            <div className=" mt-3 boredr-2 pl-4 rounded-xl">
              <h1 className="text-3xl font-semibold"> Name: {singleProduct.name}</h1>
              <p className="text-orange-500 text-xl">Price:Rs {singleProduct.caloriesPerServing}</p>
              <p className="text-blue-600">Rating:{singleProduct.rating}</p>
              <div className="mt-6 ml-3 gap-3 flex">
                <button className="bg-slate-300 w-5 font-bold">-</button>
                <span className="font-bold">1</span>
                <button className="bg-slate-300 w-5 font-bold">+</button>
              </div>


              <div className=" flex items-center justify-end gap-4 mr-28 p-3 mt-16">
                <button className="bg-blue-500 text-white w-52 h-10 rounded-sm shadow-xl  hover:bg-blue-600 font-bold">Buy Now</button>
                <button
                onClick={()=>{
                  dispatch({type:"ADD_TO_CART",payload:singleProduct})
                }


                }
                className="bg-orange-500 text-white w-52 h-10 rounded-sm shadow-xl font-bold hover:bg-orange-600">Add To Cart</button>
              </div>

            </div>

          </div>
          <div className="mr-[65%] mt-24">
            <h1 className="text-3xl font-bold">Production Description</h1>
            <p><span className="font-semibold">MealType: </span>{singleProduct.mealType}</p>
            <p><span className="font-semibold">PrepTimeMinutes: </span>{singleProduct.prepTimeMinutes}</p>
            <p> <span className="font-semibold">Cuisine: </span>{singleProduct.cuisine}</p>
            <p><span className="font-semibold">Difficulty: </span>{singleProduct.difficulty}</p>

            <div>
              <h1 className="text-3xl font-bold mt-5">Ingredients:</h1>
              <ul className="list-disc pl-5 mt-4">
                {(singleProduct.ingredients || []).map((ingredient, index) => (
                  <li key={index} className="font-semibold">
                    <span className="italic">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>



        </>

      ) : (
        <div className="">Loading...</div>
      )}



    </div>
  )
}

export default ProductDescription
