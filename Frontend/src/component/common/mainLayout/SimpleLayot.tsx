import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";


const SimpleLayout = () => {

  return (
    <>
      <div >
        <Header />
        <div className='simple_layout'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SimpleLayout;
