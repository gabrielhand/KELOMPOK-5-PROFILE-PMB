import React from "react";
import "../../styles/tabel.css";
import { Table } from "react-bootstrap";

const Tabel = () => {
  return (
    <div>
      <div>
        <div className="col-6 p-3 mt-4">
          <h5>Club - Serie A 22/23</h5>
          <Table className="table table-responsive bg-white table-condensed table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Club</th>
                <th scope="col">Squad</th>
                <th scope="col">Age</th>
                <th scope="col">Market Value</th>
                <th scope="col">Total Market Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>SSC Napoli</td>
                <td>27</td>
                <td>26</td>
                <td>€23.30m</td>
                <td>€629.00m</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Ac Milan</td>
                <td>30</td>
                <td>27</td>
                <td>€18.24m</td>
                <td>€547.25m</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Inter Milan</td>
                <td>27</td>
                <td>28</td>
                <td>€19.79m</td>
                <td>€534.45m</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Juventus FC</td>
                <td>28</td>
                <td>27</td>
                <td>€15.03m</td>
                <td>€420.70m</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Atlanta BC</td>
                <td>25</td>
                <td>26</td>
                <td>€13.18</td>
                <td>€329.40m</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>AS Roma</td>
                <td>28</td>
                <td>26</td>
                <td>€11.33m</td>
                <td>€317.15m</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>SS Lazio</td>
                <td>26</td>
                <td>27</td>
                <td>€10.54m</td>
                <td>€274.15m</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Fiorentina</td>
                <td>26</td>
                <td>26</td>
                <td>€9.09m</td>
                <td>€236.30m</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>US Sassuolo</td>
                <td>26</td>
                <td>25</td>
                <td>€6.59m</td>
                <td>€171.40m</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Torino FC</td>
                <td>28</td>
                <td>24</td>
                <td>€6.05m</td>
                <td>€169.53m</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Udinese Calsio</td>
                <td>27</td>
                <td>25</td>
                <td>€5.30m</td>
                <td>€143.05m</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Bologna FC</td>
                <td>31</td>
                <td>25</td>
                <td>€4.39m</td>
                <td>€136.10m</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>AC Monza</td>
                <td>30</td>
                <td>26</td>
                <td>€3.73m</td>
                <td>€111.90m</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>FC Empoli</td>
                <td>30</td>
                <td>25</td>
                <td>€3.44m</td>
                <td>€103.30m</td>
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>US Salemitana</td>
                <td>27</td>
                <td>26</td>
                <td>€3.69m</td>
                <td>€99.68m</td>
              </tr>
              <tr>
                <th scope="row">16</th>
                <td>US Lecce</td>
                <td>31</td>
                <td>24</td>
                <td>€3.04m</td>
                <td>€94.13m</td>
              </tr>
              <tr>
                <th scope="row">17</th>
                <td>Spezia Calsio</td>
                <td>29</td>
                <td>25</td>
                <td>€2.98m</td>
                <td>€86.30m</td>
              </tr>
              <tr>
                <th scope="row">18</th>
                <td>Hellas Verona</td>
                <td>29</td>
                <td>26</td>
                <td>€2.93m</td>
                <td>€84.85m</td>
              </tr>
              <tr>
                <th scope="row">19</th>
                <td>US Samprodia</td>
                <td>29</td>
                <td>26</td>
                <td>€2.46m</td>
                <td>€71.45m</td>
              </tr>
              <tr>
                <th scope="row">20</th>
                <td>US Cremonese</td>
                <td>26</td>
                <td>26</td>
                <td>€2.50m</td>
                <td>€64.90m</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
