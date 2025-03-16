import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadButton from "./components/UploadButton";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import View from "./pages/View/View";

function App() {
  return (
    <div className="w-screen min-h-screen max-h-fit">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/view" element={<View />}></Route>
      </Routes>
      <Footer />
      <UploadButton />
    </div>
  );
}

export default App;
