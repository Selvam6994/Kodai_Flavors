import "./App.css";
import Footer from "./Common Components/Footer";
import Navbar from "./Common Components/Navbar_Components/Navbar";
import Homepage from "./Homepage Components/Homepage";
import { Route, Routes } from "react-router-dom";
import Displayproducts from "./ProductsCardPage Components/Displayproducts";
import ViewProduct from "./ProductMainPage/ViewProduct";
import Cart from "./Cart Component/Cart";
import { createContext, useState } from "react";

export const AddCartContext = createContext();

const App = () => {
  const [productName, setProductName] = useState({});
  const [productQuantity, setProductQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);


  return (
    <AddCartContext.Provider
      value={{
        name: [productName, setProductName],
        qty: [productQuantity, setProductQty],
        itemsData: [cartItems, setCartItems],
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="category/:product" element={<Displayproducts />}></Route>
        <Route
          path="category/:category/:product"
          element={<ViewProduct />}
        ></Route>
        <Route path="/mycart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </AddCartContext.Provider>
  );
};

export default App;
