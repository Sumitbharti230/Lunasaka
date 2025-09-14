import { useContext } from "react"
import { CartContext } from "../Context/CartProvider"
import { AiTwotoneDelete } from "react-icons/ai"
import { NavLink } from "react-router-dom"


const CartPage = () => {
  const { state, dispatch } = useContext(CartContext)
  const CartItems = state.CartItems
  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);


  const totalAmount = state.CartItems.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);



  // console.log(state)
  return (
    <div className='flex justify-center mt-10'>
      <div className="w-[60%]">
        {CartItems.length > 0 ? (
          <div>
            <div className="p-2">
              {CartItems.map((item) => {
                return (
                  <div className="shadow-md my-5 rounded-md  p-3 shadow-stone-300 flex justify-between border-2 border-green-500"
                    key={item.id}>
                    <div className="flex">
                      <img className="h-16"
                        src={item.image} alt="" />
                      <h1 className="ml-7">{item.name}</h1>
                    </div>

                    <div>
                      <p>Rs: {item.caloriesPerServing}</p>
                      <button
                        onClick={() => {
                          dispatch({ type: "Delete", payload: { id: item.id } })
                        }}
                      ><AiTwotoneDelete className="text-black text-3xl " /></button>
                    </div>
                    <div className=" w-24  space-x-2 mt-3 ">
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: { id: item.id } })
                        }}
                        className="bg-slate-500 rounded w-7">-</button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: { id: item.id } });
                        }}
                        className="bg-slate-500 rounded w-7">+</button>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        ) : (
          <div className=" flex items-center justify-center p-5 text-left">
            <div className=" flex-col items-center w-96 shadow-xl text-center mr-28 p-5 rounded-xl   " >
              <div className=" ml-6">
              <img src="data:image/jpeg;base64,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" alt="cart_image" className=""/>
              </div>
              <h1 className="font-semibold mt-5 mr-5 ">There are no items in this Cart <br /> feel free to order <br /><br /> < NavLink className="text-orange-600 border-2 border-orange-600" to='/menu' >  Shop Now </NavLink></h1 >
            </div>
          </div>

        )}
      </div>

      {CartItems.length > 0 && (

        <div className="border-2 shadow flex  flex-wrap flex-col items-center justify-center shadow-slate-500 h-80 ml-8  rounded-lg w-[25%]  ">
          <p className="text-2xl font-medium">Order Summary :</p>
          <p className=" pl-8  items-center">Thank you for choosing us. If you have<br /> any questions, feel free to contact us.</p>
          <p className="text-2xl font-medium mt-4">Total Price :Rs {totalAmount} </p>

          <NavLink to="/payment " state={[...CartItems]}>
            <button
              className="bg-black text-white rounded p-2 w-52 " > Proceed to Checkout  ({totalItems})
            </button>
          </NavLink>

          <button
            onClick={() => {
              dispatch({ type: "ClearCart" })
            }}
            className="bg-red-600 text-white rounded p-2 w-52 mt-4 " > Clear Cart ({totalItems}) </button>
        </div>




      )}
    </div>
  )
}

export default CartPage;