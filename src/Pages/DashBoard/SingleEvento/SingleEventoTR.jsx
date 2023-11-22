import React from "react";
import { Link } from "react-router-dom";

const SingleEventoTR = ({ evento }) => {
  return (
    <tr className={evento.estado === "Inactivo" ? "estado-inactive-bg" : ""}>
      <td>
        <div className='flex'>
          <img src={evento.image} alt='' />
          <div>
            <h6>{evento.name}</h6>
            <p>{evento.description}</p>
            <p className='location'>
              {" "}
              <img src={location} alt='' /> {evento.location}
            </p>
          </div>
        </div>
      </td>
      <td className='vendiadas'>
        {evento.vendidas} <hr />
      </td>
      <td className='neto'>€ {evento.neto}</td>
      <td>
        <p className='date'>{evento.date}</p>
        <p className='time'>at {evento.time}</p>
      </td>
      <td>
        <button className='editar-btn'>editar </button>{" "}
        <button className='borrar-btn'>Borrar</button>
      </td>
    </tr>
  );
};

export default SingleEventoTR;
