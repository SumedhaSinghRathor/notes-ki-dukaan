import "./App.css";
import Navbar from "./components/Navbar";
import User from "./pages/User/User";
import Footer from "./components/Footer";
import UploadButton from "./components/UploadButton";

function App() {
  return (
    <div className="w-screen min-h-screen max-h-fit">
      <Navbar />
      <User />
      <Footer />
      <UploadButton />
    </div>
  );
}

export default App;
