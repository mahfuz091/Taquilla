import React, { useEffect, useState } from "react";
import single from "../../../assets/images/single.png";
import location from "../../../assets/images/Location.svg";
import SingleEventoTR from "./SingleEventoTR";
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
                <button className='thm-btn'>Editar Evento</button>
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
      </div>
      <div className='entradas-container'>
        <div className='entradas-container-header'>
          <h4>Entradas</h4>
          <button className='thm-btn'>Crear tipo de entrada</button>
        </div>
        <div className='entradas-container-table'>
          <div className='eventos-table'>
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
    </div>
  );
};

export default SingleEvento;
