import cheif from "../../assets/images/chef.png"
import backgroundmomo from "../../assets/images/backgroundmomo.png"
import Button from "../Button/Button"
import customer from "../../assets/images/customer.png"
import party1 from "../../assets/images/party1.png"
import qr1 from "../../assets/images/qr1.png"
import cheifCap1 from "../../assets/images/cheifCap1.png"
import Footer from "../Footer/Footer"
import { NavLink } from "react-router-dom"

function Services() {
  return (
    <>
      <div className=" flex justify-center items-center p-5  gap-3">

        <div className=" mb-28">
          <h1 className=" text-3xl font-lg italic text-green-700 mb-10">Our Services</h1>
          <p className="text-xl text-slate-500 mb-4">KNOWING OUR CUSTOMERS NEEDS</p>
          <p className="font-bold"><span className="text-orange-500">We're more than just momos.</span> <br />
            We're a full-service dining experience.</p>

        </div>

        <div className=" ml-[20%]">
          <img src={cheif} alt="cheif_image" className="w-96 " />
        </div>

      </div>



      <div className="relative h-[608px] w-[100%x] ">
        <img
          src={backgroundmomo}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
        />
        <div className="relative  flex  h-full">
          <div className="flex flex-col text-white mt-96 ml-14">
            <h1 className="text-2xl font-bold">Dine With Us</h1>
            <p className="mb-9">Enjoy our momos in the comfort of your own home with our delivery services</p>
            <Button title="watch the video" className="px-4 py-2 bg-blue-500 text-white rounded after:content-none" />
          </div>
        </div>
      </div>

      {/* this is the part after the video.... */}
      {/* this is first part */}
      <div className=" flex flex-col  items-center gap-10 h-[1100px]">


        <div className="  flex justify-center gap-10 p-5 mt-5">
          <div className="mr-96">
            <img src={party1} alt="party_icon" className="w-16" />
            <h1 className="text-2xl font-bold mb-5 mt-5">Private Party</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur. Lectus faucibus <br /> lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus <br /> viverra tincidunt.</p>

            <div className=" flex mt-10 gap-10 shadow-2xl rounded-xl ">
              <div className="mt-5">
                <h1 className="text-2xl text-green-700 font-bold">Scan the QR code</h1>
                <p className="text-slate-500">You can also check about the service</p>
              </div>
              <div>
                <img src={qr1} alt="" className="w-24" />
              </div>
            </div>

          </div>

          <div>
            <img src={customer} alt="" className="w-[552px] h-[448]" />
          </div>
        </div>

        {/* this is second part */}
        <div className=" flex justify-center gap-10 p-5 mt-5">
          <div className="">
            <img src={customer} alt="" className="w-[552px] h-[448]" />
          </div>

          <div className="ml-96 ">
            <img src={cheifCap1} alt="cheifCap1" className="w-24 " />
            <h1 className="font-bold text-2xl mb-5 mt-5">Categring</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur. Lectus faucibus <br /> lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus <br /> viverra tincidunt. </p>

            <div className=" flex mt-10 gap-10 shadow-2xl rounded-xl p-2">
              <div className="mt-5">
                <h1 className="text-2xl text-green-700 font-bold">Scan the QR code</h1>
                <p className="text-slate-500">You can also check about the service</p>
              </div>
              <div>
                <img src={qr1} alt="" className="w-24" />
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* this is for the queries section */}

      <div className=" flex flex-col justify-center items-center text-center ">
        <div className=" w-[70%] bg-slate-100 rounded-xl ">
          <h1 className="text-3xl font-bold mt-9 ">Got any Queries?</h1>
          <p className="text-slate-500 mb-16 mt-8">If you have any queries, send us a message. Our Friendly team would love to hear from you </p>
<div className="mb-5 flex items-center justify-center">

  <NavLink to='/contact'>
          <Button title="Get in touch"/>
          </NavLink>
          </div>
        </div>

      </div>


      <div className="mt-10">
      <hr />

    <Footer/>
    </div>



    </>

  )
}

export default Services
