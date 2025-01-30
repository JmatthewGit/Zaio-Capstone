import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Experiences from "../components/Experiences";
import Slide from "../components/Slide";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Experiences />
      <Slide />
      <Footer />
    </>
  );
};

export default HomePage;
