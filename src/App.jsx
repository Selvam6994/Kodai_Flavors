import "./App.css";
import Footer from "./Common Components/Footer";
import Navbar from "./Common Components/Navbar_Components/Navbar";
import Homepage from "./Homepage Components/Homepage";
import { Route, Routes } from "react-router-dom";
import Displayproducts from "./ProductsCardPage Components/Displayproducts";
import ViewProduct from "./ProductMainPage/ViewProduct";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="category/:product" element={<Displayproducts />}></Route>
        <Route path="category/:category/:product" element={<ViewProduct />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
