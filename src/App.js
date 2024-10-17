import Nav from "./components/Nav";
import {BrowserRouter} from "react-router-dom"
import Rout from './components/rout';
import Footer from "./components/Footer"
import Homeproduct from "./components/home_product";
import { useState } from "react";

function App() {
  // add to cart
  const [cart, setCart] = useState([])
  //shop page product
  const [shop, setShop] = useState(Homeproduct)
  //shop search filter
  const [search, setSearch] = useState('')
  //category filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) =>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>{
    setShop(Homeproduct)
  }
  //shop search filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>{
    if (searchlength) {
      alert("Please Search Something")
      setShop(Homeproduct)
    }
    else {
      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search
      })
      setShop(searchfilter)
    }
  }
  //add to cart
  const addtocart = (product) => {
    const exist = cart.find(x => {
      return x.id === product.id
    })
    if (exist) {
      alert("This product allready added in cart")
    }
    else{
      setCart([...cart, {...product, qty:1}])
      alert("Added to cart")
    }
  }
  console.log(cart);
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
        <Rout addtocart={addtocart} setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
