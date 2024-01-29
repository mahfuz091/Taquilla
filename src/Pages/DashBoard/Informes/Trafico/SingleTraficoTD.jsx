import React from "react";
import { ProgressBar } from "react-bootstrap";
// import location from "../../../assets/images/Location.svg";
import { Link } from "react-router-dom";

const SingleTraficoTD = ({ evento }) => {
  return (
    <tr>
      <td>
        <div className='flex'>
          <img className='evento-img' src={evento.image} alt='' />
          <div>
            <h6>{evento.name}</h6>
            {/* <p>{evento.description}</p>
            <p className='location'>
              {" "}
              <img src={location} alt='' /> {evento.location}
            </p> */}
          </div>
        </div>
      </td>
      <td>
        <p className='date'>{evento.date}</p>
        <p className='time'>at {evento.time}</p>
      </td>
      <td className='visitantes'>{evento.visitantes} </td>
      <td className='compras'>{evento.compras}</td>
      {/* <td
        className={
          evento.estado === "Inactivo" ? "estado-inactive" : "estado-active"
        }
      >
        {evento.estado}
      </td> */}
    </tr>
  );
};

export default SingleTraficoTD;
