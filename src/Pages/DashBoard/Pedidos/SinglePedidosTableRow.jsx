import React from "react";
import threedot from "../../../assets/images/3-dot.svg";
import { Link } from "react-router-dom";

const SinglePedidosTableRow = ({ pedido }) => {
  return (
    <tr className={pedido?.estado === "Inactivo" ? "estado-inactive-bg" : ""}>
      <td className='location'>{pedido?.location}</td>
      <td className='name'>{pedido.name}</td>
      <td className='email'>{pedido.email}</td>
      <td className='dni'>{pedido.dni}</td>
      <td className='pedido'>
        <h6>{pedido.eventoname}</h6>
        <p>{pedido.description}</p>
      </td>
      <td className='importe'>{pedido.importe}€</td>
      <td>
        <p className='date'>{pedido.date}</p>
        <p className='time'>{pedido.time}</p>
      </td>
      <td>
        <Link to='detallesboleto'>
          <img src={threedot} alt='' />
        </Link>
      </td>
    </tr>
  );
};

export default SinglePedidosTableRow;
