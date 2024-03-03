import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import CircularProgress from "../../../../assets/images/circularProgress.png";
import "react-circular-progressbar/dist/styles.css";
import leftArrow from "../../../../assets/images/leftarrow.png";
import customTooltip from "../../../../assets/images/tooltip.png";
import HorizontalBar from "../../../../assets/images/horizontalBar.png";
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
import CustomTooltip from "./CustomTooltip";
// import React, { PureComponent } from "react";

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
    uv: 10,
  },
  {
    name: "03.00",
    uv: 30,
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
    uv: 20,
  },
];
const horizontalData = [
  { name: "18 años", value: 56 },
  { name: "17 años", value: 20 },
  { name: "16 años", value: 16 },
  { name: "15 años", value: 10 },
  { name: "14 años", value: 7 },
];
const CustomizedLabel = ({ x, y, fill, value }) => (
  <text
    x={x}
    y={y}
    fontSize='16'
    fontFamily='sans-serif'
    fill={fill}
    textAnchor='start'
  >
    {value}%
  </text>
);

const AccesoDashboard = () => {
  const percentage = 40;

  return (
    <div className='main-container detallesboleto '>
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
                {/* <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={{
                    root: {},
                    path: {
                      
                      stroke: "#9B65E4",
                    },
                    trail: {
                     
                      stroke: "##F1F1F1",
                     
                    },
                    text: {
                      
                      fill: "#192351",
                      
                      fontSize: "16px",
                    },
                    background: {
                      fill: "red",
                    },
                  }}
                /> */}
                <img src={CircularProgress} alt='' />
              </div>
              <p className='text-center'>300/800</p>
              <div className='acceso-card'>
                <h6>apertura de puertas</h6>
                <p>Sunday, June 1, 2023 at 11:30 p.m.</p>
              </div>
              <div className='acceso-card'>
                <h6>Puertas cerrando</h6>
                <p>Monday, June 2, 2023 at 4:30</p>
              </div>
            </div>
          </Col>
          <Col xl={8}>
            <div className='sexo-edad h-100'>
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
                  <img className='w-100' src={HorizontalBar} alt='' />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className='bg-white accesos-hora'>
          <h4>Accesos por hora</h4>
          <div className='chart overflow-x-auto '>
            {/* <BarChart width={1440} height={350} data={data} barCategoryGap={30}>
              <XAxis dataKey='name' />
              <YAxis></YAxis>

              <Bar width={35} dataKey='uv' fill='#9B65E4' />
            </BarChart> */}
            <BarChart
              width={1040}
              height={350}
              data={data}
              margin={{ bottom: 20 }}
              barCategoryGap={30}
              barGap={40}
            >
              <XAxis dataKey='name' dy={25} tick={{ fill: "#757575" }} />
              <YAxis tick={{ fill: "#757575" }}></YAxis>
              <Bar barSize={50} dataKey='uv' fill='#9B65E4' />
            </BarChart>
            <img className='tooltip-custom' src={customTooltip} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccesoDashboard;
