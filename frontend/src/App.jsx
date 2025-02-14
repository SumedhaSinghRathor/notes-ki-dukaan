import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature1 from "./components/Feature1/Feature1";
import Feature2 from "./components/Feature2/Feature2";
import Feature3 from "./components/Feature3/Feature3";
import Footer from "./components/Footer";
import Upload from "./pages/Upload/Upload";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Navbar />
      <Upload />
      <Footer />
      {/* <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Footer /> */}
    </div>
  );
}

export default App;
