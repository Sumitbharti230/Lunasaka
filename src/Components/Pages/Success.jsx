import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Success() {

  // console.log("Success")
  const [SearchParams]=useSearchParams()
  let data=SearchParams.get("data")
  console.log(data)


  const decodedData = atob(data);
  const newData = JSON.parse(decodedData);
  console.log(newData);


  return (
    <div className=' flex justify-center items-center it p-4 h-[100%]'>

      <div className=' text-center items-center font-semibold shadow-xl'>
        <img src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg" alt="success_image" className='w-52' />

        <h1>Payment Successful</h1>
        <p>Thank You</p>
        {/* <NavLink to="/menu">
        <button className=' bg-red-600 hover:bg-green-800 p-2
             flex items-center gap-x-2 text-white rounded-full justify-center mr-5'>Back to menu</button>
             </NavLink> */}
      </div>
    </div>
  )
}

export default Success
