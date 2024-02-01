import React from "react";
import { Col, Row } from "react-bootstrap";
import leftArrow from "../../../../assets/images/leftarrow.png";
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
import "react-datepicker/dist/react-datepicker.css";
const piData = [
  { name: "Group A", value: 123 },
  { name: "Group B", value: 234 },
  { name: "Group C", value: 143 },
  { name: "Group D", value: 45 },
];
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
];

const COLORS = ["#9B65E4", "#FFD047", "#E4579A", "#4691FF"];

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

const TraficoDashBoard = () => {
  return (
    <div className='main-container detallesboleto'>
      <p>
        <img src={leftArrow} alt='' />
        Atrás
      </p>
      <div className='trafico-dashboard-container'>
        <Row>
          <Col xl={8}>
            <Row>
              <Col xl={6}>
                <div className='trafico-card'>
                  <h6>Visitas a la página</h6>
                  <p>12k</p>
                </div>
              </Col>
              <Col xl={6}>
                <div className='trafico-card'>
                  <h6>Compras realizadas</h6>
                  <p>7k</p>
                </div>
              </Col>
              <Col xl={6}>
                <div className='trafico-card'>
                  <h6>Entradas vendidas</h6>
                  <p>600</p>
                </div>
              </Col>
              <Col xl={6}>
                <div className='trafico-card'>
                  <h6>Tasa de conversión</h6>
                  <p>70%</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={4}>
            <div className='fuente-card'>
              <h6>Fuente del tráfico</h6>
              <div>
                <PieChart
                  width={170}
                  height={170}
                  style={{ margin: "15px auto" }}
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
              </div>
              <div>
                <Row>
                  <Col xl={6}>
                    <div className='pi-card'>
                      <p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <circle cx='6' cy='6' r='6' fill='#FFD047' />
                        </svg>
                        Web de Taquilla Central
                      </p>
                      <p>123</p>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='pi-card'>
                      <p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='13'
                          height='12'
                          viewBox='0 0 13 12'
                          fill='none'
                        >
                          <circle cx='6.5' cy='6' r='6' fill='#E4579A' />
                        </svg>
                        Iframe en página externa
                      </p>
                      <p>234</p>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='pi-card' style={{ height: "100%" }}>
                      <p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <circle cx='6' cy='6' r='6' fill='#4691FF' />
                        </svg>
                        Links de referidos
                      </p>
                      <p>45</p>
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='pi-card'>
                      <p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='13'
                          height='12'
                          viewBox='0 0 13 12'
                          fill='none'
                        >
                          <circle cx='6.5' cy='6' r='6' fill='#9B65E4' />
                        </svg>
                        Campañas de publicidad
                      </p>
                      <p>143</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <div className='trafico-y-ventas-container'>
          <Row>
            <Col xl={8}>
              <div>
                <h4>Tráfico y ventas por días</h4>
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
              <div className='trafico-y-ventas-right'>
                <h4>18 Noviembre 2024</h4>

                <div className='d-flex justify-content-between visitas'>
                  <h5>Visitas a la pagina</h5>
                  <p>2k</p>
                </div>

                <div className='d-flex justify-content-between entradas'>
                  <h5>Entradas vendidas</h5>
                  <p>123</p>
                </div>
                <div className='fuente'>
                  <h5>Fuente del tráfico</h5>
                  <p>
                    <span>Web de Taquilla Central</span>
                    <span>234</span>
                  </p>
                  <p>
                    <span>Iframe en página externa</span>
                    <span>567</span>
                  </p>
                  <p>
                    <span>Links de referidos</span>
                    <span>23</span>
                  </p>
                  <p>
                    <span>Campañas de publicidad</span>
                    <span>457</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TraficoDashBoard;
