import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar"
import Logo from "./components/Logo/Logo"
import Carrousel from "./components/Carrousel/Carrousel"
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import MenuContainer from "./components/MenuContainer/MenuContainer"
import Branches from "./components/Branches/Branches";
import BranchesContainer from "./components/BranchesContainer/BranchesContainer";
import Franchises from "./components/Franchises/Franchises";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locales" element={<Branches />} />
        <Route path="/franquicias" element={<Franchises />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <>
      <Carrousel />
      <MenuContainer />
      <BranchesContainer />
    </>
  );
};

export default App;
