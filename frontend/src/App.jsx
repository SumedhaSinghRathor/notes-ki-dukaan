import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadButton from "./components/UploadButton";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import View from "./pages/View/View";
import SearchProvider from "./context/SearchContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Filter from "./components/Filter";
import { FilterProvider } from "./context/FilterContext";
import { ContextProvider } from "./context/ContentContext";

function App() {
  let loggedIn = true;
  const [search, setSearch] = useState("");

  return (
    <>
      {loggedIn ? (
        <ContextProvider>
          <div className="h-screen flex flex-col">
            <Navbar search={search} setSearch={setSearch} />
            <div
              className="flex-1 overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home search={search} />} />
                <Route path="/view/:id" element={<View />} />
              </Routes>
            </div>
          </div>
        </ContextProvider>
      ) : (
        <>
          <Header />
          <Hero />
          <Feature />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
