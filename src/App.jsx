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
  const [item, setItem] = useState([]);

  
  // Get cart item
  const getCartData = () => {
    const cartData = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      cartData.push(JSON.parse(localStorage.getItem(keys[i])));
      setCartItems([...cartData]);
    }
  };
  // Add cart item
  const addItem = (product, productQuantity) => {
    const productQty = {
      name: product.name,
      qty: productQuantity,
      category: product.category,
      price: productQuantity*product.price,
      img: product.image,
    };
    localStorage.setItem(product.name, JSON.stringify(productQty));
    setProductQty(1);
    getCartData();
  };
  // remove cart item
  const removeItem = (item) => {
    const cartProducts = cartItems.filter(
      (product) => product.name !== item.name
    );
    localStorage.removeItem(item.name);
    setItem(cartProducts);
    if (cartProducts.length == 0 && Object.keys(localStorage).length == 0) {
      cartItems.length = 0;
    }
  };

  // increase cart item qty
  const increaseQty = (product) => {
    setProductName(product.name);
    setProductQty(productQuantity + 1);
  };



  // decrease cart item qty
  const decreaseQty = (product) => {
    setProductName(product.name);
    if (productQuantity > 1) {
      setProductQty(productQuantity - 1);
    }
  };

  return (
    <AddCartContext.Provider
      value={{
        name: [productName, setProductName],
        qty: [productQuantity, setProductQty],
        itemsData: [cartItems, setCartItems],
        cartItemData: [getCartData],
        addCartItem: [addItem],
        remvoveCartItem: [removeItem],
        cartItemRemove: [item],
        addQty: [increaseQty],
        minusQty: [decreaseQty],
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
