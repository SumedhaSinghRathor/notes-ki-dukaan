import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
