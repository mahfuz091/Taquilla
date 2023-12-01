import React, { useEffect, useState } from "react";
import single from "../../../assets/images/single.png";
import location from "../../../assets/images/Location.svg";
import SingleEventoTR from "./SingleEventoTR";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
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
} from "recharts";
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

const SingleEvento = () => {
  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    fetch("/eventos.json")
      .then((response) => response.json())
      .then((data) => setEventos(data));
  }, []);
  return (
    <div className='main-container single-evento'>
      <p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='26'
          height='27'
          viewBox='0 0 26 27'
          fill='none'
        >
          <path
            d='M16.5732 21.3918L8.68145 13.5L16.5732 5.60818'
            stroke='black'
            stroke-width='2.10448'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        Atrás
      </p>
      <div className='single-evento-contaner'>
        <div className='single-evento-card'>
          <img src={single} alt='' />
          <div className='single-card-content'>
            <div className='single-card-header'>
              <div>
                <h4 className='single-card-title'>Evento de prueba</h4>
                <p className='single-card-desc'>
                  Parque de atracciones de zaragoza
                </p>
                <p className='single-card-location'>
                  <img src={location} alt='' />
                  Westheimer Ana, Illinois
                </p>
              </div>
              <div>
                <Link to='/eventos/editarEvento'>
                  <button className='thm-btn'>Editar Evento</button>
                </Link>
              </div>
            </div>
            <hr className='line-1' />
            <div className='single-card-footer'>
              <p>
                Vendidas: <span>500/341</span>
              </p>
              <p>
                Neto: <span>€ 420.84</span>
              </p>
              <p>
                fecha: <span>14 Apr 2022 at 8:00 PM</span>
              </p>
            </div>
          </div>
        </div>
        <div className='single-evento-chart'>
          <Row>
            <Col xl={8}>
              <div className='evento-chart'>
                <div className='evento-chart-header'>
                  <div>
                    <h4>Ventas</h4>
                    <p>
                      Entradas vendidas hoy: <span>€344</span>
                    </p>
                    <p>
                      Ventas netas hoy: <span>€344</span>
                    </p>
                  </div>
                  <div className='chart-btn-group'>
                    <select name='' id=''>
                      <option value=''>Dec 1, 2023</option>
                    </select>
                    <button className='thm-btn'>Abrir informe completo</button>
                  </div>
                </div>
                <hr className='line-chart' />
                <div className='chart'>
                  <BarChart width={680} height={225} data={data}>
                    <XAxis dataKey='name' />
                    <YAxis></YAxis>
                    <Bar width={35} dataKey='uv' fill='#9B65E4' />
                  </BarChart>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className='accesos'>
                <h4>Accesos</h4>
                <p>
                  Consulta la cantidad de asistentes que han accedido a tu
                  evento
                </p>
                <div className='accesos-card'>
                  <h6>Aforo total</h6>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='95'
                    height='6'
                    viewBox='0 0 95 6'
                    fill='none'
                  >
                    <path
                      d='M95 3.00001L90 0.113256L90 5.88676L95 3.00001ZM-4.37114e-08 3.5L90.5 3.50001L90.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z'
                      fill='black'
                    />
                  </svg>
                  <p>500</p>
                </div>
                <div className='accesos-card'>
                  <h6>Cantidad de asistente</h6>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='6'
                    viewBox='0 0 30 6'
                    fill='none'
                  >
                    <path
                      d='M30 3L25 0.113251L25 5.88675L30 3ZM-4.37114e-08 3.5L25.5 3.5L25.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z'
                      fill='black'
                    />
                  </svg>
                  <p>376</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='entradas-container'>
        <div className='entradas-container-header'>
          <h4>Entradas</h4>
          <button className='thm-btn'>Crear tipo de entrada</button>
        </div>
        <div className='entradas-container-table'>
          <div className='eventos-table table-responsive'>
            <table>
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Vendidas</th>
                  <th>Neto</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              {eventos.slice(0, 5).map((evento) => (
                <SingleEventoTR
                  key={evento.id}
                  evento={evento}
                ></SingleEventoTR>
              ))}
            </table>
            <hr className='line-2' />
            <div>
              <button className='aforo-btn'>
                Aforo total- <span>400</span>{" "}
              </button>
              <button className='cantidad-btn'>
                Cantidad de asistente- <span>354</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='publicar-evento-container'>
        <h4>Publicar evento</h4>
        <form className='publicar-evento-form' action=''>
          <div className='from-group'>
            <label htmlFor=''>
              Enlace a tu evento<span className='span'>*</span>
            </label>
            <input
              className='text-input'
              type='text'
              placeholder='panel.taquillacentral.com/eventos'
            />
          </div>
          <div className='from-group'>
            <label htmlFor=''>
              Iframe de tu evento<span className='span'>*</span>
            </label>
            <p>Insert it into your website to start selling</p>
            <input
              className='text-input'
              type='text'
              placeholder='panel.taquillacentral.com/eventos'
            />
          </div>
          <div className='form-group'>
            <button className='thm-btn'>Publicar</button>
          </div>
        </form>
      </div>
      <div className='eliminar-evento-container'>
        <h4>Eliminar evento</h4>
        <p>
          Ingresa el nombre de tu evento para confirmar que deseas eliminarlo”*
        </p>
        <div className='form-group'>
          <input type='text' placeholder='Ingrese su nombre' />
          <button className='create-evento-btn'>Borrar</button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvento;
