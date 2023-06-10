import React from 'react'
import { Table } from "react-bootstrap";
import lpng from '../assets/lpng.png';
import DataScudetto from '../assets/data/DataScudetto'
import '../styles/tabel.css';

const Scudetto = () => {
  return (<div className="col-12 mt-5">
  <div className="p-1">
    <Table className="table border border-dark table-responsive bg-white table-condensed">
      <thead className="table-dark">
        <tr>
          <th colspan="11">
            <h5>Scudetto</h5>
          </th>
        </tr>
      </thead>
      <thead className="table-secondary border-dark">
        <tr>
          <th scope="col" className="text-center">
            #
          </th>
          <th scope="col" colSpan="2" className="text-center">
            Club
          </th>
          <th scope="col" className="text-center">
            <img src={lpng} alt="" />
          </th>
          <th scope="col" className="text-center">
            W
          </th>
          <th scope="col" className="text-center">
            D
          </th>
          <th scope="col" className="text-center">
            L
          </th>
          <th scope="col" className="text-center">
            Goals
          </th>
          <th scope="col" className="text-center">
            +/-
          </th>
          <th scope="col" className="text-center">
            Pts
          </th>
        </tr>
      </thead>
      <tbody>
          {DataScudetto.map((data) => (
            <tr key={data.id}>
              <td className="text-center">{data.no}</td>
              <td colSpan="2" className="tdleft">
                <img src={data.club} alt="" style={{marginRight:"20px"}} />
                {data.name}
              </td>
              <td className="text-center">
              {data.lp}
              </td>
              <td className="text-center">{data.w}</td>
              <td className="text-center">{data.d}</td>
              <td className="text-center">{data.l}</td>
              <td className="text-center">{data.goals}</td>
              <td className="text-center">{data.pm}</td>
              <td className="text-center">{data.pts}</td>
            </tr>
          ))}
        </tbody>

      </Table>
      </div>
    </div>
  )
}

export default Scudetto;