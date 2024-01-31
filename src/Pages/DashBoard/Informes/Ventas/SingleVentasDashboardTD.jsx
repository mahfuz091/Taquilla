import React from "react";
import { ProgressBar } from "react-bootstrap";

const SingleVentasDashboardTD = ({ evento }) => {
  return (
    <tr>
      <td>
        <div className='flex'>
          <img className='evento-img' src={evento.image} alt='' />
          <div>
            <h6>{evento.name}</h6>
            <p>Parque de atracciones de zaragoza </p>
          </div>
        </div>
      </td>

      <td className='position-relative'>
        <div className='d-flex gap-2 align-items-center'>
          <ProgressBar
            className='w-100'
            now={(evento.vendidas / 400) * 100}
            label={`${evento.vendidas}`}
          />
          <p className='progress-label2'>/400</p>
        </div>

        <p className='progress-label'>{400 - evento.vendidas}</p>
      </td>
      <td className='neto' style={{ textAlign: "right" }}>
        € {evento.neto}
      </td>
    </tr>
  );
};

export default SingleVentasDashboardTD;
