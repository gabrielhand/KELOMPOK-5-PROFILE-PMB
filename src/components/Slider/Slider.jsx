import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sr1 from '../../assets/sr1.jpg';
import sr2 from '../../assets/sr2.jpg';
import sr3 from '../../assets/sr3.jpg';
import logo from '../../assets/logo.png';
import itali from '../../assets/itali.png';
import '../../styles/slider.css';

function Slider() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <div
          className="slider-item slider-item-01"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 13, 107, 0.5), rgba(0, 13, 107, 0.5)), url(${sr1})`,
          }}
        >
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="slider-item slider-item-02"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 13, 107, 0.5), rgba(0, 13, 107, 0.5)), url(${sr2})`,
          }}
        >
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="slider-item slider-item-03"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 13, 107, 0.5), rgba(0, 13, 107, 0.5)), url(${sr3})`,
          }}
        >
          
        </div>
      </Carousel.Item>
    </Carousel>

    <div className="info">
      <p style={{marginLeft: `12rem`, color:`white`}}>Serie A</p>
      <img src={logo} alt="" style={{width: `9rem`, height:`13rem`, marginLeft:`2rem`, marginTop: `-5.5rem`}} />

      <div className="info2" style={{backgroundColor:`white`, width:`20rem`, marginLeft: `12rem`, marginTop:`-7rem`}}>
        <p>Number of teams : 20 teams</p>
        <p>Foreigners : 351 Players 62,7%</p>
      </div>
      <div className="right" style={{backgroundColor:`white`, width:`30rem`, height:`7rem`, marginLeft: `52rem`, marginTop:`-8rem`, padding:`1rem`}}>
        <img src={itali} alt="" style={{width:`7rem`, height: `6rem`}} />
        <p style={{marginTop:`-6rem`}}>Itali</p>
          <p>Reigning Champion : SCC NAPOLI</p>
          <p>History Champion : Juventus(36)</p>
      </div>
      <div className="right2" style={{backgroundColor:`#154A7B`, width:`14rem`, height:`7rem`, marginLeft: `35rem`, marginTop:`-7rem`, padding:`1rem`}}>
        <h1>€4.63bn</h1>
        <p>Market Value</p>
      </div>
    </div>
    </>
  );
}

export default Slider;
