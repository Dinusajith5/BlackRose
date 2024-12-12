import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Footer from "./components/Footer"
// import image
import bannerposey from './assets/bannerkids.png'
import bannerlongbouqet from './assets/bannermens.png'

export default function App() {
  return (
   <main className="bg-primary text-tertiary">

    <BrowserRouter>

    <Header />

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/Posey" element={<Category  Category="Poseys" banner={bannerposey}/>} />
    <Route path="/Long Bouqet" element={<Category  Category="Long_Bouqes" banner={bannerlongbouqet}/>} />
    {/* <Route path="/" element={<Category />} /> */}
    <Route path="/" element={<Product />} >
    <Route path=":productId" element={<Product/>} />
    </Route>
    <Route path="/" element={<Cart />} />
    <Route path="/Login" element={<Login />} />

    </Routes>

     <Footer/>

    </BrowserRouter>

    

   </main>
  )
}