import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import "../../styles/layout.css";

const Layout = () => {
  return (
    <div className="body">
      <Fragment>
        <Navbar />
        <Slider />
        <div>
          <Routers />
        </div>
        <Footer />
      </Fragment>
    </div>
  );
};

export default Layout;
