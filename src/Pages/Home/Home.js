import React from "react";
import './Home.css';
import './Section.css';
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";
import Section3 from "../../Components/Section3/Section3";
import Section4 from "../../Components/Section4/Section4";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default Home;
