
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home/Home"
import Sidebar from "./components/Sidebar/Sidebar"
import Logo from "./components/Home/Logo/Logo"
import Footer from "./components/Footer/Footer";
import Menu from "./components/MenuContainer/Menu/Menu";
import Branches from "./components/Branches/Branches";
import Franchises from "./components/Franchises/Franchises";
import Mision from "./components/Mision/Mision";
import WorkwithUs from "./components/WorkwithUs/WorkwithUs";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Panel from "./components/UserPanel/Panel";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PromoCounter from "./components/PromoCounter/PromoCounter";



function App() {
  return (
    <AuthProvider>
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
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path=
            "/panel"
            element={
              <ProtectedRoute>
                <Panel />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/promoCounterTheBoxPrivate/counter" element={<PromoCounter />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}



export default App;
