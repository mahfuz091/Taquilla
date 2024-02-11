import React from "react";
import { Link } from "react-router-dom";
import calender from "../../../assets/images/date.svg";
import location from "../../../assets/images/Location.svg";

const SingleEventoTR = ({ evento }) => {
  return (
    <tr className={evento.estado === "Inactivo" ? "estado-inactive-bg" : ""}>
      <td className='evento'>
        <div className='flex'>
          <img className='evento-img' src={evento.image} alt='' />
          <div>
            <h6>{evento.name}</h6>
            {/* <p>{evento.description}</p> */}
            <div>
              <span>
                <img className='w-14' src={calender} alt='' />
              </span>
              <span className='date ms-1'>{evento.date}</span>
              <span className='time ms-1'>at 8:00 PM</span>
            </div>
            <p className='location'>
              {" "}
              <img src={location} alt='' /> Westheimer Ana, Illinois
            </p>
          </div>
        </div>
      </td>
      <td className='vendiadas'>
        {evento.vendidas} <hr />
      </td>
      <td className='neto'>€ {evento.neto}</td>
      <td className='neto'>€ 233.50</td>
      <td>
        <Link to='/eventos/editarTicket'>
          <button className='editar-btn'>editar </button>
        </Link>
        <button className='borrar-btn'>Borrar</button>
      </td>
    </tr>
  );
};

export default SingleEventoTR;
