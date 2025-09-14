import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Map from "../../assets/images/map.png"
import Button from "../Button/Button"
import Footer from "../Footer/Footer";



function Contact() {
  return (
    <>
      <div className='flex flex-col items-center '>
        <h1 className='text-4xl font-lg italic text-green-800 mt-8 '>Our Contact</h1>
        <p className='text-slate-600 mt-8 text-2xl'>GET IN TOUCH</p>
        <h1 className='mt-5 font-bold text-xl'><span className='text-orange-600 '>Our Friendly Team </span>would love to hear from you</h1>





      </div>

      <div className=' h-96 flex justify-center gap-16 items-center w-[100%]  '>

        <div className=" p-6 shadow-2xl h-44 w-80  ">
          <div className="flex items-center space-x-2 mt-3 ">
            <FaLocationDot className="text-orange-500" />
            <h1 className="font-bold">LOCATION</h1>
          </div>
          <p className="font-lg italic mt-7"> New Baneshwor -41201,<br /> Kathmandu, Bagmati, Nepal</p>
        </div>




        <div className=' P-6 shadow-2xl h-44 w-80  '>
          <div className="flex items-center space-x-2 text-center mt-7 ml-6">
            <FaPhoneAlt className="text-orange-600" />

            <h1 className="font-bold">PHONE</h1>
          </div>
          <p className="text-green-800 mt-7 ml-6">Mobile: <span className='ml-10 font-lg italic'> (+977) 980 5689789</span> <br /> <span className='ml-24'>(+977) 9841 275897 </span></p>

          <p className="text-green-800 mt-2 ml-6">Tel: <span className='ml-32 font-lg italic'> 01-4783972</span></p>
        </div>



        <div className=' shadow-2xl h-44 w-80 '>
          <div className="flex items-center space-x-2 mt-5 ml-6">
            <FaClock className="text-orange-600" />

            <h1 className="font-bold ">SERVICE TIME</h1>
          </div>
          <p className="text-green-800 mt-7 ml-6">MON - FRI   <span className="ml-14 font-lg italic">8 am - 8 pm</span></p>
          <p className="text-green-800 ml-6">SAT - SUN <span className="ml-20 font-lg italic">Closed</span></p>
        </div>


      </div>


      <div className=" flex h-[600px]">


        <div className=" border-2  h-[100%] w-[40%]  ml-10">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.98504395763!2d85.3327296751469!3d27.68685712639547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cc4b11c08f%3A0x12e1bae294ead9bd!2sPizza%20Station!5e0!3m2!1sen!2snp!4v1737184269839!5m2!1sen!2snp"
            width="750"
            height="590"
            allowFullScreen=""
            className="w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className=" w-[60%] p-8 mr-28">
          <div className=" shadow-2xl w-[100%] h-[100%] ml-4 ">



            <h1 className="text-2xl font-bold ml-5 mt-5">Contact <span className="text-orange-600">Us</span></h1>
            <p className="text-slate-500 ml-5 mt-5">If you have any queries, send us a message. Our Friendly team would <br /> love to hear from you</p>

            <form className="ml-5 mt-5">
              {/* First Name */}
              <div className="flex gap-10 ">
                <div>
                  <label className="block  mb-1 " htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className=" p-2 border rounded w-96"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block  mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className=" p-2 border rounded w-96"
                    required
                  />
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label className="block mb-1" htmlFor="purpose">
                  What Can We Do For You?
                </label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  placeholder="Enter your purpose"
                  className=" w-full p-2 border rounded"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block  mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full h-11 p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <Button title='Send message' />

            </form>

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

export default Contact
