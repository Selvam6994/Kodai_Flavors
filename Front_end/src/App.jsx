import "./App.css";
import Footer from "./Common Components/Footer";
import Navbar from "./Common Components/Navbar_Components/Navbar";
import Homepage from "./Homepage Components/Homepage";
import { Route, Routes, json, useNavigate } from "react-router-dom";
import Displayproducts from "./ProductsCardPage Components/Displayproducts";
import ViewProduct from "./ProductMainPage/ViewProduct";
import Cart from "./Cart Component/Cart";
import { createContext, useEffect, useState } from "react";
import { getProductData } from "./Data/Get Data/Products";
import LoginPage from "./User Account/LoginPage";
import UserDashboard from "./User Dashboard/UserDashboard";

export const AddCartContext = createContext();
export const UserProfileContext = createContext();
const App = () => {
  const [productsData, setProductsData] = useState([]);

  const [productName, setProductName] = useState({});
  const [productQuantity, setProductQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState([]);

  // get products data
  const getProducts = async () => {
    const data = await getProductData();
    setProductsData(data);
  };

  // Add cart item
  const addItem = (product, productQuantity) => {
    const productQty = {
      name: product.name,
      qty: productQuantity,
      category: product.category,
      price: productQuantity * product.price,
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

  // Get cart item
  const getCartData = () => {
    const cartData = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      cartData.push(JSON.parse(localStorage.getItem(keys[i])));
      setCartItems([...cartData]);
    }
  };

// render navbar component while login and logout
const [randomNum, setRandomNum] = useState();
const genRandomNum = () => {
   const num = Math.random();
   setRandomNum(num);
 };


  // get user profile data (user dashboard)
  // const navigate = useNavigate();

  // const userData = () => {
  //   if (Cookies.get("gToken") === undefined) {
  //     navigate("/");
  //   } else {
  //     const token = Cookies.get("gToken");
  //     return jwtDecode(token);
  //   }
  // };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AddCartContext.Provider
      value={{
        name: [productName, setProductName],
        qty: [productQuantity, setProductQty],
        itemsData: [cartItems, setCartItems],
        productInfo: [productsData],
        cartItemData: [getCartData],
        addCartItem: [addItem],
        remvoveCartItem: [removeItem],
        cartItemRemove: [item],
        addQty: [increaseQty],
        minusQty: [decreaseQty],
      }}
    >
      <UserProfileContext.Provider value={{ renderNavBar: [randomNum] , genNumber:[genRandomNum]}}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="category/:product" element={<Displayproducts />}></Route>
          <Route
            path="category/:category/:product"
            element={<ViewProduct />}
          ></Route>
          <Route path="/mycart" element={<Cart />}></Route>
          <Route path="/user/login" element={<LoginPage />}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
        </Routes>
        <Footer />
      </UserProfileContext.Provider>
    </AddCartContext.Provider>
  );
};

export default App;
