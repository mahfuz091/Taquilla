import React from "react";
import calender from "../../../../assets/images/date.svg";

import location from "../../../../assets/images/Location.svg";
import eye from "../../../../assets/images/eye-svgrepo-com.svg";
import { Link } from "react-router-dom";

const PagadoTD = ({ pagado }) => {
  return (
    <tr className='pagado-tr'>
      <td className='evento'>
        <div className='flex'>
          <img className='evento-img' src={pagado.image} alt='' />
          <div>
            <h6>{pagado.name}</h6>
            <p>{pagado.description}</p>
            <div>
              <span>
                <img className='w-14' src={calender} alt='' />
              </span>
              <span className='date ms-1'>{pagado.date}</span>
              <span className='time ms-1'>at 8:00 PM</span>
            </div>
            <p className='location'>
              {" "}
              <img src={location} alt='' /> Westheimer Ana, Illinois
            </p>
          </div>
        </div>
      </td>

      <td className='ingresos'>€ {pagado.ingresos}</td>
      <td className='neto'>€ {pagado.neto}</td>
      <td
        className={
          pagado.estado === "Pagado"
            ? "estado-pagado"
            : pagado.estado === "Proceso"
            ? "estado-proceso"
            : "estado-cancel"
        }
      >
        {pagado.estado}
      </td>
      <td>
        <Link
          className='eye-btn '
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <img src={eye} alt='' />
        </Link>
      </td>
    </tr>
  );
};

export default PagadoTD;
