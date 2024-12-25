import React from "react";
import './About.css';
import Header from "../../../component/Header";
import Footer from '../../../component/Footer';


const About = () => {
    return (
      <>
        <Header />
        <div className="About">
          <h1>This is About Page</h1>
        </div>
        <Footer />
      </>
    );
  };
  
  export default About;