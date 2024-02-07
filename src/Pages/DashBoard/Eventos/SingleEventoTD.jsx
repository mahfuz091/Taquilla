import React from "react";
import location from "../../../assets/images/Location.svg";
import { Link } from "react-router-dom";
import calender from "../../../assets/images/date.svg";
import eye from "../../../assets/images/eye-svgrepo-com.svg";

const SingleEventoTD = ({ evento }) => {
  return (
    <tr>
      <td>
        <div className='flex'>
          <img className='evento-img' src={evento.image} alt='' />
          <div>
            <h6>{evento.name}</h6>
            <p>{evento.description}</p>
            <div>
              <span>
                <img className='w-14' src={calender} alt='' />
              </span>
              <span className='date ms-1'>{evento.date}</span>
              <span className='time ms-1'>at {evento.time}</span>
            </div>
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
      {/* <td>
        <p className='date'>{evento.date}</p>
        <p className='time'>at {evento.time}</p>
      </td> */}
      <td
        className={
          evento.estado === "Inactivo" ? "estado-inactive" : "estado-active"
        }
      >
        {evento.estado}
      </td>
      <td>
        <Link to='singleEvento' className='eye-btn'>
          <img src={eye} alt='' />
        </Link>
      </td>
    </tr>
  );
};

export default SingleEventoTD;
