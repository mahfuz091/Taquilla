import React from "react";
import location from "../../../assets/images/Location.svg";
import { Link } from "react-router-dom";

const SingleEventoTD = ({ evento }) => {
  return (
    <tr>
      <td>
        <div className='flex'>
          <img className='evento-img' src={evento.image} alt='' />
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
      <td
        className={
          evento.estado === "Inactivo" ? "estado-inactive" : "estado-active"
        }
      >
        {evento.estado}
      </td>
      <td>
        <Link to='singleEvento'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
          >
            <path
              d='M16 9C15.7348 9 15.4804 8.89464 15.2929 8.70711C15.1054 8.51957 15 8.26522 15 8C15 7.73478 15.1054 7.48043 15.2929 7.29289C15.4804 7.10536 15.7348 7 16 7C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8C17 8.26522 16.8946 8.51957 16.7071 8.70711C16.5196 8.89464 16.2652 9 16 9ZM16 17C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17ZM16 25C15.7348 25 15.4804 24.8946 15.2929 24.7071C15.1054 24.5196 15 24.2652 15 24C15 23.7348 15.1054 23.4804 15.2929 23.2929C15.4804 23.1054 15.7348 23 16 23C16.2652 23 16.5196 23.1054 16.7071 23.2929C16.8946 23.4804 17 23.7348 17 24C17 24.2652 16.8946 24.5196 16.7071 24.7071C16.5196 24.8946 16.2652 25 16 25Z'
              stroke='black'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </Link>
      </td>
    </tr>
  );
};

export default SingleEventoTD;
