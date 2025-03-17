import React from "react";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Feature1 from "../../components/Feature1/Feature1";
import Feature2 from "../../components/Feature2/Feature2";
import Feature3 from "../../components/Feature3/Feature3";
import Footer from "../../components/Footer";
import Feature from "../../components/Feature";

function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
}

export default Landing;
