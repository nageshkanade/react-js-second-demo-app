import React from "react";
import style from "./Home.module.scss";
import "./Home.module.scss"
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      {/* inline +bootstrap */}
      <div className={`${style.Home} bg-success`} >  
      {/* bootstrap */}
        <h1 className="text-primary">This is Home Page</h1> 
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
