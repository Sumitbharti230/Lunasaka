import chefGirl from "../../assets/images/chefGirl.png"
import vdobackground from "../../assets/images/videoimgchef.png"
import cheif1 from "../../assets/images/a_cheif1.png"
import cheif2 from "../../assets/images/a_cheif2.png"
import momo1 from "../../assets/images/a_momo1.png"
import Footer from "../Footer/Footer"



function About() {
  return (

    <>
      <div className=' h-[120%] w-[100%]  flex justify-center gap-96 text-center items-center'>
        <div className="text-left">
          <h1 className='text-3xl mb-4 font-lg italic text-green-900'>
            About Us
          </h1>
          <h1 className="text-slate-500">WE PRIDE OURSELF ON</h1>
          <h1 className="text-3xl"><span className="text-orange-600">Our authentic momo recipes </span> <br />passed down through <br />generations</h1>
        </div>

        <div className=' h-[110%] '>
          <img src={chefGirl} alt="chef_girl_image" className="w-96 mt-5" />
        </div>



      </div>

      {/* this is video part........ */}

      <div className="relative h-[608px] w-[100%x] mt-20 ">
        <img
          src={vdobackground}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative  flex  h-full">

        </div>
      </div>

      {/* this is the part after the video...  */}

      <div className=" flex flex-col justify-center items-center mt-16 ">


        <div className="flex gap-96 p-3 ">
          <div>
            <h1 className="font-bold text-2xl">Our momos <span className="text-orange-600 ">are made <br /> with love</span> </h1>
            <p className="mt-6 text-slate-500">Lorem ipsum dolor sit amet consectetur. Lectus <br /> faucibus lorem ac adipiscing. Leo odio tincidunt <br /> ipsum magna lacus viverra tincidunt. Viverra aliquet <br /> sollicitudin eget dapibus. Vestibulum velit viverra <br /> gravida consectetur sed facilisis ut morbi.</p>


            {/* <img src={momo1} alt="momo1" className="w-28 ml-5 " /> */}
          </div>

          <div>

            <img src={cheif1} alt="chef_image1" className="w-96 h-80" />

          </div>
        </div>



        <div className=" flex gap-96 p-3 mt-28 ">

          <div>
            <img src={cheif2} alt="chef_image2" className="w-96 h-80" />


          </div>
          <div>
            <h1 className="text-2xl font-bold">Taste the difference with <br /> <span className="text-orange-600">our handcrafted momos</span></h1>
            <p className="mt-6 text-slate-500">Lorem ipsum dolor sit amet consectetur. Lectus <br /> faucibus lorem ac adipiscing. Leo odio tincidunt <br /> ipsum magna lacus viverra tincidunt. Viverra aliquet <br /> sollicitudin eget dapibus. Vestibulum velit viverra <br /> gravida consectetur sed facilisis ut morbi.</p>

          </div>
        </div>



        <div className=" flex gap-96 p-3 mt-28">
          <div>
            <h1 className="text-2xl font-bold">Taste the difference with <br /> <span className="text-orange-600">our handcrafted momos</span></h1>
            <p className="mt-6 text-slate-500">Lorem ipsum dolor sit amet consectetur. Lectus <br /> faucibus lorem ac adipiscing. Leo odio tincidunt <br /> ipsum magna lacus viverra tincidunt. Viverra aliquet <br /> sollicitudin eget dapibus. Vestibulum velit viverra <br /> gravida consectetur sed facilisis ut morbi.</p>


          </div>
          <div>

            <img src={cheif2} alt="chef_image2" className="w-96 h-80" />

          </div>
        </div>




      </div>


      <div className="mt-10">
        <hr />

        <Footer />
      </div>





    </>
  )
}

export default About;
