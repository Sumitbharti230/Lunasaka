import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import cheffinger from '../../assets/images/cheffinger.png'
import qr from '../../assets/images/qr.png'
import blue from '../../assets/images/Ablue.png'
import masala from '../../assets/images/Amasala.png'
import { FaRegCircle } from "react-icons/fa";

const Allergy = () => {
  return (
    <div>
      <div className='flex items-center ml-10  p-5'>
        <div className="w-[50%] mt-20">
          <p className="text-3xl text-green-800  font-bold ml-20">Allergy Advice</p><br></br><br></br>
          <p className='text-2xl text-gray-500 ml-20'>AT OUR RESTAURANT</p><br></br>
          <h1 className='text-2xl font-bold ml-20'>We use only the freshest and highest<br /> quality ingredients in all our dishes, <br />
            <span className='text-orange-600'>and offer transparency in our ingredient<br /> labeling.</span></h1>

        </div>
        <div className='flex items-center mt-10 '>
          <div className="h-[20%]  flex items-center justify-end ml-32">
            <img src={cheffinger} className="w-96" />
          </div>
        </div>
      </div>


      <section className=" w-full allergyDIV allergyList py-10">
        <h3 className="text-center text-3xl font-[900]">
          <span className="text-[#FB5D03]">Ingredients</span> Used
        </h3>
        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          <h4 className="text-lg font-semibold mb-5">For The Dough</h4>

          <ul className="list-none">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 120 gms refined flour.
            </li>

            <li className="flex items-center gap-2 my-3">
              <FaRegCircle className="text-red-500" /> 1/4 tsp baking powder.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp salt water.
            </li>
          </ul>
        </div>



        {/* first div */}
        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          {/* <div className=" top-[80px] border-2">
        <img src={masala} alt="" className="w-[1000px]" />
        </div> */}

          <h4 className="text-lg font-semibold mb-5">
            For The Chicken Fillings
          </h4>




          <ul className="list-none flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 cup chicken minced.
            </li>

            <li className="flex items-center gap-2 ">
              <FaRegCircle className="text-red-500" /> 1/2 cup onions, finely
              chopped.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp black pepper
              powder.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tbsp oil.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp garlic paste.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp soya sauce.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> salt.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp vinegar.
            </li>
          </ul>
        </div>
        {/* second div */}

        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          <h4 className="text-lg font-semibold mb-5">
            For The Vegetarian Fillings
          </h4>

          <ul className="list-none flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 cup cabbage and carots,
              grated.
            </li>

            <li className="flex items-center gap-2 ">
              <FaRegCircle className="text-red-500" /> 2 tbsp onions, finely
              chopped.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tbsp ginger, finely
              chopped.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tsp oil.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp vinegar.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/2 tsp soya sauce.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> salt.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1/4 tsp vinegar.
            </li>
          </ul>
        </div>
        {/* third div */}

        <div className="bg-white w-[42%] my-6 border-2 border-[#388482] rounded-md shadow-md p-6 mx-auto">
          <h4 className="text-lg font-semibold mb-5">For Chilli Sauce</h4>

          <ul className="list-none flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 25 gram garlic peeled.
            </li>

            <li className="flex items-center gap-2 ">
              <FaRegCircle className="text-red-500" /> 6 gms whole chillies.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 3 tbsp vinegar.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> 1 tbsp oil.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> salt.
            </li>

            <li className="flex items-center gap-2">
              <FaRegCircle className="text-red-500" /> sugar.
            </li>
          </ul>
        </div>
        {/* forth div */}
      </section>


      <section className=" p-16 " >
        <div className="w-full text-center mb-6">
          <h3 className="text-center text-3xl font-[900]">
            <span className="text-[#FB5D03]">Allergy</span> Advice
          </h3>
        </div>

        <div>
          <p className="text-[#4d4d4d]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus provident adipisci sapiente veniam eius blanditiis,
            consectetur quas quasi magnam corrupti. Nam eligendi corporis
            repudiandae veritatis laudantium voluptates ratione, modi excepturi
            pariatur odit ipsum incidunt nihil iure omnis quibusdam distinctio!
            Exercitationem.
          </p>
          <br />

          <p className="text-[#4d4d4d]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            quibusdam dolorum natus earum repellendus praesentium magnam ex
            aspernatur aliquam necessitatibus. Repellendus non vel at beatae
            molestias mollitia reiciendis praesentium voluptates.
          </p>
          <br />

          <p className="text-[#4d4d4d]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            natus enim sint atque, ex tempora praesentium eligendi ducimus
            provident hic possimus odit ipsa. Non, pariatur maxime.
            Necessitatibus soluta vero architecto, sapiente autem nisi
            recusandae eaque odio, porro veritatis perspiciatis, asperiores ut
            reiciendis excepturi. Vero labore doloribus quisquam commodi
            eligendi in eaque fuga numquam aperiam temporibus. Id nesciunt ullam
            commodi in.
          </p>
          <br />

          <p className="text-[#4d4d4d]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            natus enim sint atque, ex tempora praesentium eligendi ducimus
            provident hic possimus odit ipsa. Non, pariatur maxime.
            Necessitatibus soluta vero architecto, sapiente autem nisi
            recusandae eaque odio, porro veritatis perspiciatis, asperiores ut
            reiciendis excepturi. Vero labore doloribus quisquam commodi
            eligendi in eaque fuga numquam aperiam temporibus. Id nesciunt ullam
            commodi in. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aperiam suscipit ab, laboriosam error reprehenderit ducimus
            tenetur fuga iure ad cupiditate voluptatibus enim deleniti, a
            aliquam, ratione nesciunt odit fugiat in. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Quasi natus enim sint atque, ex
            tempora praesentium eligendi ducimus provident hic possimus odit
            ipsa. Non, pariatur maxime. Necessitatibus soluta vero architecto,
            sapiente autem nisi recusandae eaque odio, porro veritatis
            perspiciatis, asperiores ut reiciendis excepturi. Vero labore
            doloribus quisquam commodi eligendi in eaque fuga numquam aperiam
            temporibus. Id nesciunt ullam commodi in. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Aperiam suscipit ab, laboriosam
            error reprehenderit ducimus tenetur fuga iure ad cupiditate
            voluptatibus enim deleniti, a aliquam, ratione nesciunt odit fugiat
            in.
          </p>
        </div>
        {/* first div */}

        <div className="  bg-slate-50 mt-10 p-6 rounded-md flex flex-col gap-2 items-center shadow-xl">
          <h4 className="text-2xl text-[#229493] font-bold">
            Scan the QR Code
          </h4>
          <p>You can also check the allergy advices using your phone as well</p>
          <div className="bg-white p-2 rounded-md shadow-md mt-9">
            <img src={qr} alt="allergy qr" className="md:w-56 w-44" />
          </div>
        </div>
      </section>

<div className="mt-">
<Footer/>
</div>
    </div>



  )
}

export default Allergy;