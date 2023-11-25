import React, { useEffect, useState } from 'react';
import PagadoTD from './PagadoTD';

const Pagado = () => {
    const [pagados, setPagados] = useState([]);
    useEffect(() => {
        fetch("/pagado.json")
            .then((response) => response.json())
            .then((data) => setPagados(data));
    }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 3;
    const totalPages = Math.ceil(pagados.length / eventsPerPage);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = pagados.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    return (
        <div className="pagado main-container">
            <div className='pagado-header'>
                <h4>pagado</h4>
                <p>
                    Solicita el pago de tu evento tres días después ha finalizado o
                    comprueba su estado
                </p>
            </div>
            <div className="pagoda-container">
                <h4>Detalles de pagos</h4>
                <div className='compras-container-header'>
                    <div className='flex'>
                        <div className='search-box'>
                            <input
                                className='search'
                                type='search'
                                name=''
                                id=''
                                placeholder='Buscar número de pedido, correo electrónico o normal'
                            />
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                className='search-icon'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z'
                                    fill='#666666'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M15.9433 15.9429C16.3338 15.5524 16.967 15.5524 17.3575 15.9429L21.7075 20.2929C22.098 20.6834 22.098 21.3166 21.7075 21.7071C21.317 22.0976 20.6838 22.0976 20.2933 21.7071L15.9433 17.3571C15.5528 16.9666 15.5528 16.3334 15.9433 15.9429Z'
                                    fill='#666666'
                                />
                            </svg>
                        </div>
                        <div>
                            <select id='mySelect' className='myselect'>
                                <option value='default'>
                                    <span>Ordenar por</span> <span>Más recientes</span>
                                </option>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="pagado-table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Fecha</th>
                                <th>Ingresos brutos</th>
                                <th>Pago neto</th>
                                <th>Estado</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentEvents.map((pagado) => (
                                <PagadoTD key={pagado.id} pagado={pagado}></PagadoTD>
                            ))}
                        </tbody>

                    </table>
                </div>
                {/* Pagination */}
                <div className='pagination'>
                    <p>Mostrando de <span>1</span> a <span>3</span> artículos</p>
                    <div className='pagination-button-group'>
                        <button
                            className='page-btn'
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='7'
                                height='12'
                                viewBox='0 0 7 12'
                                fill='none'
                            >
                                <path
                                    d='M6 1L1 6L6 11'
                                    stroke='#9B65E4'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </button>
                        {Array.from(
                            { length: Math.ceil(pagados.length / eventsPerPage) },
                            (_, i) => (
                                <button
                                    className={currentPage === i + 1 ? "active-page" : "page-btn"}
                                    key={i + 1}
                                    onClick={() => paginate(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            )
                        )}
                        <button
                            className='page-btn'
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='7'
                                height='12'
                                viewBox='0 0 7 12'
                                fill='none'
                            >
                                <path
                                    d='M1 11L6 6L1 1'
                                    stroke='#949CA9'
                                    stroke-width='1.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pagado;