import React from "react";
import { ProgressBar } from "react-bootstrap";
// import location from "../../../assets/images/Location.svg";
import { Link } from "react-router-dom";
import eye from "../../../../assets/images/eye-svgrepo-com.svg";

import calender from "../../../../assets/images/date.svg";
import location from "../../../../assets/images/Location.svg";

const SingleTraficoTD = ({ evento }) => {
  return (
    <tr>
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

      <td className='visitantes'>{evento.visitantes} </td>
      <td className='compras'>{evento.compras}</td>
      <td className='text-end'>
        <Link to='dashboard' className='eye-btn '>
          <img src={eye} alt='' />
        </Link>
      </td>
    </tr>
  );
};

export default SingleTraficoTD;
