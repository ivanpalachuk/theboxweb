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
import Mision from "./components/Mision/Mision";
import WorkwithUs from "./components/WorkwithUS/WorkwithUs";

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
        <Route path="/cultura" element={<Mision />} />
        <Route path="/trabajo" element={<WorkwithUs />} />
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
