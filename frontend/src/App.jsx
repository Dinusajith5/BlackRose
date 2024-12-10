import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Footer from "./components/Footer"

export default function App() {
  return (
   <main className="bg-primary text-tertiary">

    <BrowserRouter>

    <Header />

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/Posey" element={<Category />} />
    <Route path="/Long Bouqet" element={<Category />} />
    {/* <Route path="/" element={<Category />} /> */}
    <Route path="/" element={<Product />} >
    <Route path=":productId" element={<Product/>} />
    </Route>
    <Route path="/" element={<Cart />} />
    <Route path="/" element={<Login />} />

    </Routes>

     <Footer/>

    </BrowserRouter>

    

   </main>
  )
}