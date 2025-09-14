import React from 'react'

function Failure() {
    return (
        <div className='  flex  justify-center border-2 h-[100%] w-[100%] border-red-300 '>
            <div className=' border-2 w-96 h-72 flex items-center justify-center flex-col mt-3 rounded-xl shadow-2xl' >
                <img src="https://cdn-icons-png.flaticon.com/512/6659/6659895.png" alt="failure" className='h-26 w-32 ' />
                <p className='font-semibold'> Payment failed </p>
                <button className='bg-red-700 w-36 rounded-sm text-white  mt-3'>TRY AGAIN</button>
            </div>

        </div>
    )
}

export default Failure;
