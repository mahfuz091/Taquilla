import React, { useEffect, useState } from "react";
import leftArrow from "../../../../assets/images/leftarrow.png";
import { Col, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import DatePicker from "react-datepicker";
import SingleVentasDashboardTD from "./SingleVentasDashboardTD";

const data = [
  {
    name: "00.00",
    uv: 40,
  },
  {
    name: "01.00",
    uv: 20,
  },
  {
    name: "02.00",
    uv: 30,
  },
  {
    name: "03.00",
    uv: 10,
  },
  {
    name: "04.00",
    uv: 18,
  },
  {
    name: "05.00",
    uv: 23,
  },
  {
    name: "06.00",
    uv: 34,
  },
  {
    name: "07.00",
    uv: 38,
  },
  {
    name: "08.00",
    uv: 34,
  },
  {
    name: "09.00",
    uv: 20,
  },
  {
    name: "10.00",
    uv: 30,
  },
];
const piData = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 400 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#9B65E4", "#FFD047", "#4691FF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const VentasDashboard = () => {
  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    fetch("/acceso.json")
      .then((response) => response.json())
      .then((data) => setEventos(data));
  }, []);
  const percentage = 40;
  return (
    <div className='main-container detallesboleto'>
      <p>
        <img src={leftArrow} alt='' />
        Atrás
      </p>
      <div className='acceso-dashboard-container'>
        <Row>
          <Col xl={4}>
            <div className='bg-white acceso-totales h-100'>
              <h5>Accesos totales</h5>
              <div className='mx-auto' style={{ width: 137, height: 137 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={{
                    root: {},
                    path: {
                      // Path color
                      stroke: "#9B65E4",
                    },
                    trail: {
                      // Trail color
                      stroke: "##F1F1F1",
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    },
                    text: {
                      // Text color
                      fill: "#192351",
                      // Text size
                      fontSize: "16px",
                    },
                    background: {
                      fill: "red",
                    },
                  }}
                />
              </div>
              <p className='text-center'>300/800</p>
              <div className='acceso-card ventas-card'>
                <h6>Total Recaudado</h6>
                <p>12300.50€</p>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <div className='sexo-edad'>
              <div className='sexo'>
                <h6>Sexo</h6>

                <PieChart
                  width={170}
                  height={170}
                  style={{ margin: "29px auto 47px" }}
                >
                  <Pie
                    data={piData}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                  >
                    {piData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <div className='pichart-des'>
                  <p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='13'
                      viewBox='0 0 12 13'
                      fill='none'
                    >
                      <circle cx='6' cy='6.5' r='6' fill='#FFD047' />
                    </svg>{" "}
                    Masculina
                  </p>
                  <p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='13'
                      viewBox='0 0 12 13'
                      fill='none'
                    >
                      <circle cx='6' cy='6.5' r='6' fill='#4691FF' />
                    </svg>{" "}
                    Femenina
                  </p>
                  <p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='13'
                      viewBox='0 0 12 13'
                      fill='none'
                    >
                      <circle cx='6' cy='6.5' r='6' fill='#9B65E4' />
                    </svg>{" "}
                    Ns/Nc
                  </p>
                </div>
              </div>
              <div className='edad'>
                <h6>Edad</h6>
                <div className=''>
                  <img
                    src='../../../../src/assets/images/horizontalBar.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className='trafico-y-ventas-container'>
          <Row>
            <Col xl={8}>
              <div>
                <div className='d-flex justify-content-between'>
                  <h4 className='ventas-hora-title'>Ventas por hora</h4>
                  <DatePicker
                    className='date-picker'
                    //   selected={selectedDateTime}
                    //   onChange={handleDateTimeChange}

                    dateFormat='d MMM yyyy'
                    //   timeCaption='Time'
                    placeholderText='23.12.2024'
                  />
                </div>

                <div className='chart overflow-x-auto'>
                  <BarChart width={680} height={288} data={data}>
                    <XAxis dataKey='name' />
                    <YAxis></YAxis>
                    <Bar width={35} dataKey='uv' fill='#9B65E4' />
                  </BarChart>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className='trafico-y-ventas-right h-100'>
                <h4>18:00</h4>

                <div className='d-flex justify-content-between visitas'>
                  <h5>Entradas Vendidas</h5>
                  <p>2k</p>
                </div>

                <div className='d-flex justify-content-between entradas'>
                  <h5>Total Recaudado</h5>
                  <p>123</p>
                </div>
                <div className='fuente'>
                  <h5>Por tipo de entrada</h5>
                  <p>
                    <span>Entrada de prueba 1</span>
                    <span>234</span>
                  </p>
                  <p>
                    <span>Entrada de prueba 2</span>
                    <span>567</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='trafico-y-ventas-container'>
          <Row>
            <Col xl={8}>
              <div>
                <h4>Ventas por días</h4>
                <form action=''>
                  <div className='form-group'>
                    <label htmlFor=''>Desde</label>
                    <DatePicker
                      className='date-picker'
                      //   selected={selectedDateTime}
                      //   onChange={handleDateTimeChange}

                      dateFormat='d MMM yyyy'
                      //   timeCaption='Time'
                      placeholderText='23.12.2024'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>Hasta</label>
                    <DatePicker
                      className='date-picker'
                      //   selected={selectedDateTime}
                      //   onChange={handleDateTimeChange}

                      dateFormat='d MMM yyyy'
                      //   timeCaption='Time'
                      placeholderText='23.12.2024'
                    />
                  </div>
                </form>
                <div className='chart overflow-x-auto'>
                  <BarChart width={680} height={225} data={data}>
                    <XAxis dataKey='name' />
                    <YAxis></YAxis>
                    <Bar width={35} dataKey='uv' fill='#9B65E4' />
                  </BarChart>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className='trafico-y-ventas-right h-100'>
                <h4>18:00</h4>

                <div className='d-flex justify-content-between visitas'>
                  <h5>Entradas Vendidas</h5>
                  <p>2k</p>
                </div>

                <div className='d-flex justify-content-between entradas'>
                  <h5>Total Recaudado</h5>
                  <p>123</p>
                </div>
                <div className='fuente'>
                  <h5>Por tipo de entrada</h5>
                  <p>
                    <span>Entrada de prueba 1</span>
                    <span>234</span>
                  </p>
                  <p>
                    <span>Entrada de prueba 2</span>
                    <span>567</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='ventas-entrada-container'>
          <h4>Ventas por tipo de entrada</h4>
          <div className='acceso-table ventas-dashboard-table table-responsive'>
            <table>
              <thead>
                <tr>
                  <th>Evento</th>

                  <th style={{ minWidth: "250px" }}>Vendidas/Totals</th>
                  <th style={{ textAlign: "right", minWidth: "146px" }}>
                    Neto
                  </th>
                </tr>
              </thead>
              <tbody>
                {eventos.slice(0, 4).map((evento) => (
                  <SingleVentasDashboardTD
                    key={evento.id}
                    evento={evento}
                  ></SingleVentasDashboardTD>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentasDashboard;
