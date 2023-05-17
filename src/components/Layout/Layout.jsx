import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Tabel from "../Tabel/Tabel";
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
        <Tabel />
        <Footer />
      </Fragment>
    </div>
  );
};

export default Layout;
