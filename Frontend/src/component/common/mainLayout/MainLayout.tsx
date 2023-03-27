import React from "react";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayout = () => {

  return (
    <>
      <div className={`mainsiteLayout `}>
        <Header />
        <div className='commonLayout'>
          
          <div className='commonCard'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
