import React from "react";

const FacturasTR = ({ factura }) => {
  return (
    <tr className='facturas-tr'>
      <td className='sinfactura'>{factura.sinfactura}</td>
      <td>{factura.date}</td>
      <td>{factura.name}</td>
      <td>€ {factura.neto}</td>
      <td
        className={
          factura.estado === "Paid"
            ? "estado-pagado"
            : factura.estado === "Process"
            ? "estado-proceso"
            : "estado-cancel"
        }
      >
        {factura.estado}
      </td>
      <td>
        <button className='download-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default FacturasTR;
