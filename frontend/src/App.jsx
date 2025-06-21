import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadButton from "./components/UploadButton";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import View from "./pages/View/View";
import Landing from "./pages/Landing/Landing";

function App() {
  let loggedIn = true;
  return (
    <div className="w-screen min-h-screen max-h-fit">
      {loggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/view" element={<View />} />
          </Routes>
          <Footer />
          <UploadButton />
        </>
      ) : (
        <>
          <Landing loggedIn={loggedIn} />
        </>
      )}
    </div>
  );
}

export default App;
