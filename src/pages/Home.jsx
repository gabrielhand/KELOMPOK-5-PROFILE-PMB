import React from "react";
import "../styles/tabel.css";
import { Table } from "react-bootstrap";

const Tabel = () => {
  return (
    <div className="col-12 mt-5">
      <div className="p-1">
        <Table className="table border border-dark table-responsive bg-white table-condensed">
          <thead className="table-dark">
            <tr>
              <th colspan="6">
                <h5>Club - Serie A 22/23</h5>
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
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/6195.png?lm=1437135876"
                  alt="sscnapoli"
                />
              </td>
              <td className="tdleft">SSC Napoli</td>
              <td>27</td>
              <td>26</td>
              <td>€23.30m</td>
              <td>€629.00m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/5.png?lm=1605166627"
                  alt="acmilan"
                />
              </td>
              <td className="tdleft">Ac Milan</td>
              <td>30</td>
              <td>27</td>
              <td>€18.24m</td>
              <td>€547.25m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/46.png?lm=1618900989"
                  alt="intermilan"
                />
              </td>
              <td className="tdleft">Inter Milan</td>
              <td>27</td>
              <td>28</td>
              <td>€19.79m</td>
              <td>€534.45m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/506.png?lm=1626441487"
                  alt="juventus"
                />
              </td>
              <td className="tdleft">Juventus FC</td>
              <td>28</td>
              <td>27</td>
              <td>€15.03m</td>
              <td>€420.70m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/800.png?lm=1438547428"
                  alt="atalantabc"
                />
              </td>
              <td className="tdleft">Atalanta BC</td>
              <td>25</td>
              <td>26</td>
              <td>€13.18m</td>
              <td>€329.40m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/12.png?lm=1533302889"
                  alt="asroma"
                />
              </td>
              <td className="tdleft">AS Roma</td>
              <td>28</td>
              <td>26</td>
              <td>€11.33m</td>
              <td>€317.15m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/398.png?lm=1601537785"
                  alt="sslazio"
                />
              </td>
              <td className="tdleft">SS Lazio</td>
              <td>26</td>
              <td>27</td>
              <td>€10.54m</td>
              <td>€274.15m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/430.png?lm=1656660160"
                  alt="fiorentina"
                />
              </td>
              <td className="tdleft">ACF Fiorentina</td>
              <td>26</td>
              <td>26</td>
              <td>€9.09m</td>
              <td>€236.30m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/6574.png?lm=1601389908"
                  alt="ussassuolo"
                />
              </td>
              <td className="tdleft">US Sassuolo</td>
              <td>26</td>
              <td>25</td>
              <td>€6.59m</td>
              <td>€171.40m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/416.png?lm=1438548174"
                  alt="torinofc"
                />
              </td>
              <td className="tdleft">Torino FC</td>
              <td>28</td>
              <td>24</td>
              <td>€6.05m</td>
              <td>€169.53m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/410.png?lm=1437136398"
                  alt="udinesecalcio"
                />
              </td>
              <td className="tdleft">Udinese Calcio</td>
              <td>27</td>
              <td>25</td>
              <td>€5.30m</td>
              <td>€143.05m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/1025.png?lm=1626441324"
                  alt="bolognafc"
                />
              </td>
              <td className="tdleft">Bologna FC</td>
              <td>31</td>
              <td>25</td>
              <td>€4.39m</td>
              <td>€136.10m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/2919.png?lm=1562072734"
                  alt="acmonza"
                />
              </td>
              <td className="tdleft">AC Monza</td>
              <td>30</td>
              <td>26</td>
              <td>€3.73m</td>
              <td>€111.90m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/749.png?lm=1626441481"
                  alt="fcempoli"
                />
              </td>
              <td className="tdleft">FC Empoli</td>
              <td>30</td>
              <td>25</td>
              <td>€3.44m</td>
              <td>€103.30m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/380.png?lm=1601390035"
                  alt="ussalernitana"
                />
              </td>
              <td className="tdleft">US Salernitana</td>
              <td>27</td>
              <td>26</td>
              <td>€3.69m</td>
              <td>€99.68m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Us_lecce.svg/1200px-Us_lecce.svg.png"
                  alt="uslecce"
                />
              </td>
              <td className="tdleft">US Lecce</td>
              <td>31</td>
              <td>24</td>
              <td>€3.04m</td>
              <td>€94.13m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/3522.png?lm=1504611067"
                  alt="speziacalcio"
                />
              </td>
              <td className="tdleft">Spezia Calcio</td>
              <td>29</td>
              <td>25</td>
              <td>€2.98m</td>
              <td>€86.30m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/276.png?lm=1617228746"
                  alt="hellasverona"
                />
              </td>
              <td className="tdleft">Hellas Verona</td>
              <td>29</td>
              <td>26</td>
              <td>€2.93m</td>
              <td>€84.85m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/1038.png?lm=1520934353"
                  alt="ussampdoria"
                />
              </td>
              <td className="tdleft">US Sampdoria</td>
              <td>29</td>
              <td>26</td>
              <td>€2.46m</td>
              <td>€71.45m</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://tmssl.akamaized.net/images/wappen/head/2239.png?lm=1501770762"
                  alt="uscremonese"
                />
              </td>
              <td className="tdleft">US Cremonese</td>
              <td>26</td>
              <td>26</td>
              <td>€2.50m</td>
              <td>€64.90m</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tabel;
