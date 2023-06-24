import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar"
import Logo from "./components/Logo/Logo"
import Carrousel from "./components/Carrousel/Carrousel"
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import MenuContainer from "./components/MenuContainer/MenuContainer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <>
      <Sidebar />
      <Logo />
      <Carrousel />
      <MenuContainer />
    </>
  );
};

export default App;
