import "./App.css";
import Navbar from "./components/Navbar";
import View from "./pages/View/View";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <View />
      <Footer />
    </div>
  );
}

export default App;
