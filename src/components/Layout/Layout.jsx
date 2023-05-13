import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import Routers from '../../routers/Routers';

const Layout = () => {
  return (
  <Fragment>
    <Navbar />
    <Slider />
    <div>
        <Routers />
    </div>
    <Footer />
  </Fragment>
  );
};

export default Layout;