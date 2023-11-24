import React from 'react';

const PagadoTD = ({ pagado }) => {
    return (
        <tr className='pagado-td'>
            <td className="evento"><img src={pagado.image} alt="" /><h6 className="name">{pagado.name}</h6></td>
            <td className="date">{pagado.date}</td>
            <td className='ingresos'>€ {pagado.ingresos}</td>
            <td className='neto'>€ {pagado.neto}</td>
            <td className={pagado.estado === "Pagado" ? "estado-pagado" : pagado.estado === "Proceso" ? "estado-proceso" : "estado-cancel"}>{pagado.estado}</td>

        </tr>
    );
};

export default PagadoTD;