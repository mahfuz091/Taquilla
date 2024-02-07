import React from "react";
import { ProgressBar } from "react-bootstrap";
import calender from "../../../../assets/images/date.svg";
import location from "../../../../assets/images/Location.svg";

const SingleVentasDashboardTD = ({ evento }) => {
  const percentageSold = (evento.vendidas / 400) * 100;
  return (
    <tr>
      <td className='evento'>
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
              <span className='time ms-1'>at 8:00 PM</span>
            </div>
            <p className='location'>
              {" "}
              <img src={location} alt='' /> Westheimer Ana, Illinois
            </p>
          </div>
        </div>
      </td>

      <td className=''>
        <div className='d-flex gap-2 align-items-center position-relative'>
          <ProgressBar
            className='w-100'
            now={(evento.vendidas / 400) * 100}
            label={`${evento.vendidas}`}
          />
          <p className='progress-label2'>/400</p>
          <p
            className='progress-label'
            style={{ right: `calc((100% - ${percentageSold}%) / 2 + 29px)` }}
          >
            {400 - evento.vendidas}
          </p>
        </div>
      </td>
      <td className='neto' style={{ textAlign: "right" }}>
        € {evento.neto}
      </td>
    </tr>
  );
};

export default SingleVentasDashboardTD;
