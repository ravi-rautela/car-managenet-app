import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MostSearchCars from "./components/MostSearchCars";
import Footer from "./components/Footer";
import Info from "./components/Info";

const Home = () => {
  return (
    <>
      {/* header  Section*/}
      <Header />
      {/* hero Section */}
      <Hero />
      <MostSearchCars />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
