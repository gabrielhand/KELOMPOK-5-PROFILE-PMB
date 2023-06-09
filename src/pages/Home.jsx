import React from 'react'
import { Table } from "react-bootstrap";
import DataHome from '../assets/data/dataHome.js';
import '../styles/tabel.css';

const Home = () => {
  return (<div className="col-12 mt-5">
  <div className="p-1">
    <Table className="table border border-dark table-responsive bg-white table-condensed">
      <thead className="table-dark">
        <tr>
          <th colspan="11">
            <h5>Club Serie A 22/23</h5>
          </th>
        </tr>
      </thead>
      <thead className="table-secondary border-dark">
        <tr>
          <th scope="col" colSpan="2" className="text-left">
            Club
          </th>
          <th scope="col" className="text-center">
            Squad
          </th>
          <th scope="col" className="text-center">
            Age
          </th>
          <th scope="col" className="text-center">
            Market Value
          </th>
          <th scope="col" className="text-center">
            Total Market Value
          </th>
        </tr>
      </thead>
      <tbody>
          {DataHome.map((data) => (
            <tr key={data.id}>
              <td colSpan="2" className="tdleft">
                <img src={data.club} alt="" style={{marginRight:"20px"}} />
                {data.name}
              </td>
              <td className="text-left">{data.squad}</td>
              <td className="text-center">
              {data.age}
              </td>
              <td className="text-center">{data.marketV}</td>
              <td className="text-center">{data.totalMarketV}</td>
            </tr>
          ))}
        </tbody>

      </Table>
      </div>
    </div>
  )
}

export default Home;