import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{color:'black'}}>Get connected with us on social networks:</span>
        </div>

        <div style={{fontSize:'1.5rem', color:'black'}}>
          <a href='https://web.facebook.com/SerieA/about/?ref=page_internal&locale=id_ID' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href='https://twitter.com/SerieA?s=20' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='http://www.legaseriea.it/' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href='https://www.instagram.com/seriea/?fbclid=IwAR25nVq94ryN-hsVzpxRK7F4Zeq19M5SROzBtsuOqhhx1Ei7hhJ5d4T5dQ0' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.tiktok.com/@seriea?is_from_webapp=1&sender_device=pc' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'black', color:'white' }}>
        © 2023 All Right Reserved!
      </div>
    </MDBFooter>
  );
}
