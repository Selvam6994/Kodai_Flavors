import "./App.css";
import Footer from "./Common Components/Footer";
import Navbar from "./Common Components/Navbar";
import Homepage from "./Homepage Components/Homepage";

const App = () => {
  return (
    <>
    <Navbar/>
      <Homepage />
      <Footer/>
    </>
  );
};

export default App;
