import Contact from "./Components/Pages/Contact"
import Login from "./Components/Auth/Login"
import ProtectedRoute from "./Components/Auth/ProtectedRoute"
import SignUp from "./Components/Auth/SignUp"
import About from "./Components/Pages/About"
import Services from "./Components/Pages/Services"
import Menu from "./Components/Pages/Menu"
import AllergyAdvice from "./Components/Pages/AllergyAdvice"
import Home from "./Components/Pages/Home"
import Navigation from "./Components/NavBar/Navigation"
import Footer from "./Components/Footer/Footer"
import ProductDescription from "./Components/Pages/ProductDescription"
import Cartpage from "./Components/Pages/Cartpage"
import Payment from "./Components/Pages/Payment"
import Success from "./Components/Pages/Success"
import Failure from "./Components/Pages/Failure"

import { Route,Routes } from "react-router-dom"
import Profile from "./Components/Auth/Profile"


function App() {
  return (
    <>
    <div>
      <Navigation/>
     <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/productdescription/:id" element={<ProductDescription/>}/>
      <Route path="/allergyadvice" element={<AllergyAdvice/>}/>
      <Route path="/cartpage" element={<Cartpage/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/failure" element={<Failure/>}/>
      <Route path="/profile" element={<Profile/>}/>



     </Routes>



    </div>






   
    </>
  )
}

export default App
